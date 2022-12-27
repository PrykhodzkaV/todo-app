import React from 'react';
import {Text, View} from 'react-native';
import {useStyles} from './Header.styles';
import {HeaderProps} from './Header.types';
export const Header: React.FC<HeaderProps> = ({
  numberAllTasks,
  numberCompletedTasks,
}) => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>To Do</Text>
      <Text>
        You've completed {numberCompletedTasks} of {numberAllTasks} task(s)
      </Text>
    </View>
  );
};
