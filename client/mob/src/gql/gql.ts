/* eslint-disable */
import * as types from './graphql';
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
  'mutation DeleteToDoById($deleteToDoByIdId: ID!) {\n  deleteToDoById(id: $deleteToDoByIdId)\n}\n\nmutation CreateToDo($toDoInput: ToDoInput) {\n  createTodo(toDoInput: $toDoInput) {\n    title\n    status\n    _id\n  }\n}\n\nmutation EditToDo($editTodoId: ID!, $toDoInput: ToDoInput) {\n  editTodo(id: $editTodoId, toDoInput: $toDoInput)\n}':
    types.DeleteToDoByIdDocument,
  'query GetAllToDos {\n  todos {\n    title\n    status\n    _id\n  }\n}':
    types.GetAllToDosDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'mutation DeleteToDoById($deleteToDoByIdId: ID!) {\n  deleteToDoById(id: $deleteToDoByIdId)\n}\n\nmutation CreateToDo($toDoInput: ToDoInput) {\n  createTodo(toDoInput: $toDoInput) {\n    title\n    status\n    _id\n  }\n}\n\nmutation EditToDo($editTodoId: ID!, $toDoInput: ToDoInput) {\n  editTodo(id: $editTodoId, toDoInput: $toDoInput)\n}',
): typeof documents['mutation DeleteToDoById($deleteToDoByIdId: ID!) {\n  deleteToDoById(id: $deleteToDoByIdId)\n}\n\nmutation CreateToDo($toDoInput: ToDoInput) {\n  createTodo(toDoInput: $toDoInput) {\n    title\n    status\n    _id\n  }\n}\n\nmutation EditToDo($editTodoId: ID!, $toDoInput: ToDoInput) {\n  editTodo(id: $editTodoId, toDoInput: $toDoInput)\n}'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetAllToDos {\n  todos {\n    title\n    status\n    _id\n  }\n}',
): typeof documents['query GetAllToDos {\n  todos {\n    title\n    status\n    _id\n  }\n}'];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 **/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
