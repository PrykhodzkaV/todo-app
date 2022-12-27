import {StyleSheet} from 'react-native';

export const useStyles = () => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignItems: 'center',
      marginVertical: 10,
    },
    button: {
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderColor: 'gray',
      borderWidth: 1,
    },
    cancel: {
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 10,
      paddingVertical: 15,
    },
    title: {
      flex: 5,
      marginHorizontal: 10,
    },
    textStyle: {color: '#007aff'},
    buttonText: {adjustsFontSizeToFit: true, fontWeight: 'bold'},
    buttonSelectedText: {
      height: 50,
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: '#FFC300',
    },
    input: {
      height: 50,
      borderWidth: 1,
      padding: 10,
      flex: 3,
      borderColor: 'gray',
    },
    changedView: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginRight: 10,
    },
  });
};
