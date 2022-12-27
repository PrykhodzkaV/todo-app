import {ToDo} from '../../gql/graphql';

export type ItemProps = {
  item: ToDo;
  setShowInput: (showInput: boolean) => void;
};
