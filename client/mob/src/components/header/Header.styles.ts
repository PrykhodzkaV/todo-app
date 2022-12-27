import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      padding: 20,
    },
    headerText: {fontSize: 25, fontWeight: 'bold'},
  });
};
