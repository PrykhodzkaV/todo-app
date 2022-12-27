import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      borderTopColor: 'gray',
      borderTopWidth: 1,
      padding: 20,
      flexDirection: 'row',
    },
    input: {
      height: 50,
      borderWidth: 1,
      flex: 6,
      borderColor: 'gray',
      marginRight: 10,
    },
    button: {
      height: 50,
      alignItems: 'center',
      backgroundColor: '#FFC300',
      paddingHorizontal: 20,
      paddingVertical: 15,
      flex: 1,
    },
    buttonText: {fontSize: 16, fontWeight: 'bold'},
  });
};
