import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: ToDo;
  deleteToDoById?: Maybe<Scalars['Boolean']>;
  editTodo?: Maybe<Scalars['Boolean']>;
};


export type MutationCreateTodoArgs = {
  toDoInput?: InputMaybe<ToDoInput>;
};


export type MutationDeleteToDoByIdArgs = {
  id: Scalars['ID'];
};


export type MutationEditTodoArgs = {
  id: Scalars['ID'];
  toDoInput?: InputMaybe<ToDoInput>;
};

export type Query = {
  __typename?: 'Query';
  todos?: Maybe<Array<Maybe<ToDo>>>;
};

export type ToDo = {
  __typename?: 'ToDo';
  _id: Scalars['ID'];
  status: Scalars['Boolean'];
  title: Scalars['String'];
};

export type ToDoInput = {
  status?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
};

export type DeleteToDoByIdMutationVariables = Exact<{
  deleteToDoByIdId: Scalars['ID'];
}>;


export type DeleteToDoByIdMutation = { __typename?: 'Mutation', deleteToDoById?: boolean | null };

export type CreateToDoMutationVariables = Exact<{
  toDoInput?: InputMaybe<ToDoInput>;
}>;


export type CreateToDoMutation = { __typename?: 'Mutation', createTodo: { __typename?: 'ToDo', title: string, status: boolean, _id: string } };

export type EditToDoMutationVariables = Exact<{
  editTodoId: Scalars['ID'];
  toDoInput?: InputMaybe<ToDoInput>;
}>;


export type EditToDoMutation = { __typename?: 'Mutation', editTodo?: boolean | null };

export type GetAllToDosQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllToDosQuery = { __typename?: 'Query', todos?: Array<{ __typename?: 'ToDo', title: string, status: boolean, _id: string } | null> | null };


export const DeleteToDoByIdDocument = gql`
    mutation DeleteToDoById($deleteToDoByIdId: ID!) {
  deleteToDoById(id: $deleteToDoByIdId)
}
    `;
export type DeleteToDoByIdMutationFn = Apollo.MutationFunction<DeleteToDoByIdMutation, DeleteToDoByIdMutationVariables>;

/**
 * __useDeleteToDoByIdMutation__
 *
 * To run a mutation, you first call `useDeleteToDoByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteToDoByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteToDoByIdMutation, { data, loading, error }] = useDeleteToDoByIdMutation({
 *   variables: {
 *      deleteToDoByIdId: // value for 'deleteToDoByIdId'
 *   },
 * });
 */
export function useDeleteToDoByIdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteToDoByIdMutation, DeleteToDoByIdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteToDoByIdMutation, DeleteToDoByIdMutationVariables>(DeleteToDoByIdDocument, options);
      }
export type DeleteToDoByIdMutationHookResult = ReturnType<typeof useDeleteToDoByIdMutation>;
export type DeleteToDoByIdMutationResult = Apollo.MutationResult<DeleteToDoByIdMutation>;
export type DeleteToDoByIdMutationOptions = Apollo.BaseMutationOptions<DeleteToDoByIdMutation, DeleteToDoByIdMutationVariables>;
export const CreateToDoDocument = gql`
    mutation CreateToDo($toDoInput: ToDoInput) {
  createTodo(toDoInput: $toDoInput) {
    title
    status
    _id
  }
}
    `;
export type CreateToDoMutationFn = Apollo.MutationFunction<CreateToDoMutation, CreateToDoMutationVariables>;

/**
 * __useCreateToDoMutation__
 *
 * To run a mutation, you first call `useCreateToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createToDoMutation, { data, loading, error }] = useCreateToDoMutation({
 *   variables: {
 *      toDoInput: // value for 'toDoInput'
 *   },
 * });
 */
export function useCreateToDoMutation(baseOptions?: Apollo.MutationHookOptions<CreateToDoMutation, CreateToDoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateToDoMutation, CreateToDoMutationVariables>(CreateToDoDocument, options);
      }
export type CreateToDoMutationHookResult = ReturnType<typeof useCreateToDoMutation>;
export type CreateToDoMutationResult = Apollo.MutationResult<CreateToDoMutation>;
export type CreateToDoMutationOptions = Apollo.BaseMutationOptions<CreateToDoMutation, CreateToDoMutationVariables>;
export const EditToDoDocument = gql`
    mutation EditToDo($editTodoId: ID!, $toDoInput: ToDoInput) {
  editTodo(id: $editTodoId, toDoInput: $toDoInput)
}
    `;
export type EditToDoMutationFn = Apollo.MutationFunction<EditToDoMutation, EditToDoMutationVariables>;

/**
 * __useEditToDoMutation__
 *
 * To run a mutation, you first call `useEditToDoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditToDoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editToDoMutation, { data, loading, error }] = useEditToDoMutation({
 *   variables: {
 *      editTodoId: // value for 'editTodoId'
 *      toDoInput: // value for 'toDoInput'
 *   },
 * });
 */
export function useEditToDoMutation(baseOptions?: Apollo.MutationHookOptions<EditToDoMutation, EditToDoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditToDoMutation, EditToDoMutationVariables>(EditToDoDocument, options);
      }
export type EditToDoMutationHookResult = ReturnType<typeof useEditToDoMutation>;
export type EditToDoMutationResult = Apollo.MutationResult<EditToDoMutation>;
export type EditToDoMutationOptions = Apollo.BaseMutationOptions<EditToDoMutation, EditToDoMutationVariables>;
export const GetAllToDosDocument = gql`
    query GetAllToDos {
  todos {
    title
    status
    _id
  }
}
    `;

/**
 * __useGetAllToDosQuery__
 *
 * To run a query within a React component, call `useGetAllToDosQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllToDosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllToDosQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllToDosQuery(baseOptions?: Apollo.QueryHookOptions<GetAllToDosQuery, GetAllToDosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllToDosQuery, GetAllToDosQueryVariables>(GetAllToDosDocument, options);
      }
export function useGetAllToDosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllToDosQuery, GetAllToDosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllToDosQuery, GetAllToDosQueryVariables>(GetAllToDosDocument, options);
        }
export type GetAllToDosQueryHookResult = ReturnType<typeof useGetAllToDosQuery>;
export type GetAllToDosLazyQueryHookResult = ReturnType<typeof useGetAllToDosLazyQuery>;
export type GetAllToDosQueryResult = Apollo.QueryResult<GetAllToDosQuery, GetAllToDosQueryVariables>;