import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {
  GetAllToDosDocument,
  useDeleteToDoByIdMutation,
  useEditToDoMutation,
} from '../../gql/graphql';
import {useStyles} from './Item.styles';
import {ItemProps} from './Item.types';
export const Item: React.FC<ItemProps> = ({item, setShowInput}) => {
  const [text, setText] = useState<string>(item.title);
  const [selected, setSelected] = useState<boolean>(false);
  const styles = useStyles();
  const changeItem = () => {
    setSelected(!selected);
  };
  const cancel = () => {
    setSelected(!selected);
    setText(item.title);
  };

  const [editToDoMutation] = useEditToDoMutation({
    refetchQueries: [{query: GetAllToDosDocument}],
  });
  const [deleteToDoByIdMutation] = useDeleteToDoByIdMutation({
    variables: {
      deleteToDoByIdId: item._id,
    },
    refetchQueries: [{query: GetAllToDosDocument}],
  });
  const checkboxView = () => {
    return (
      <>
        <CheckBox
          onCheckColor="white"
          onFillColor="#007aff"
          onAnimationType="fade"
          offAnimationType="fade"
          value={item.status}
          onValueChange={() => {
            editToDoMutation({
              variables: {
                editTodoId: item._id,
                toDoInput: {status: !item.status},
              },
            });
          }}
          boxType="square"
        />
        <TouchableOpacity style={styles.title} onPress={changeItem}>
          <Text style={item.status ? styles.textStyle : {}}>{item.title}</Text>
        </TouchableOpacity>
      </>
    );
  };
  const textInputView = () => {
    return (
      <View style={styles.changedView}>
        <TextInput
          onFocus={() => {
            setShowInput(false);
          }}
          onBlur={() => {
            setShowInput(true);
          }}
          style={styles.input}
          onChangeText={newText => setText(newText)}
          value={text}
        />
        <TouchableOpacity style={styles.cancel} onPress={cancel}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {!selected ? checkboxView() : textInputView()}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!selected) {
            deleteToDoByIdMutation();
          } else {
            editToDoMutation({
              variables: {
                editTodoId: item._id,
                toDoInput: {title: text},
              },
            });
            setSelected(!selected);
          }
        }}>
        <Text style={styles.buttonText}> {selected ? 'Update' : 'Delete'}</Text>
      </TouchableOpacity>
    </View>
  );
};
