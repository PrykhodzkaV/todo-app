import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {GetAllToDosDocument, useCreateToDoMutation} from '../../gql/graphql';
import {useStyles} from './Input.styles';
export const Input: React.FC = () => {
  const styles = useStyles();
  const [text, setText] = useState('');
  const [createToDoMutation] = useCreateToDoMutation({
    refetchQueries: [{query: GetAllToDosDocument}],
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (text.length > 0) {
            createToDoMutation({
              variables: {
                toDoInput: {title: text},
              },
            });
            setText('');
          }
        }}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
