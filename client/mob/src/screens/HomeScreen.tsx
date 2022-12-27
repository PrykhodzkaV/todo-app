import React, {useCallback, useMemo, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import {useGetAllToDosQuery, ToDo} from '../gql/graphql';
import {Header} from '../components/header/Header';
import {Input} from '../components/input/Input';
import {Item} from '../components/item/Item';
import {useStyles} from './HomeScreen.styles';
export const HomeScreen: React.FC = () => {
  const styles = useStyles();
  const [showInput, setShowInput] = useState<boolean>(true);
  const {data, loading, error} = useGetAllToDosQuery();
  const todos: [ToDo] = data?.todos as [ToDo];
  const numberCompletedTasks: number = useMemo((): number => {
    return todos?.reduce(
      (accumulator, currentValue) => accumulator + Number(currentValue?.status),
      0,
    );
  }, [todos]);

  const renderItem: ListRenderItem<ToDo> = useCallback(
    ({item}) => <Item item={item} setShowInput={setShowInput} />,
    [],
  );
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>{error.message}</Text>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              <Header
                numberAllTasks={todos?.length}
                numberCompletedTasks={numberCompletedTasks}
              />
              <FlatList data={todos} renderItem={renderItem} />
              {showInput && <Input />}
            </>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};
