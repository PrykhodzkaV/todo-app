export const ToDoTypes = `#graphql
 type ToDo {
    _id:ID!
    title: String!
    status: Boolean!
  }

  input ToDoInput {
    title: String
    status: Boolean
  }

  type Query {
    todos: [ToDo]
  }

  type Mutation {
    deleteToDoById( id: ID!): Boolean
    createTodo(toDoInput: ToDoInput): ToDo!
    editTodo( id: ID!, toDoInput: ToDoInput): Boolean
   }
 `;