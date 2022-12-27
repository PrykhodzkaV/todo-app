export const ToDoTypeDefs = `#graphql
 type ToDo {
    title: String
    status: Boolean
  }

  type Query {
    getAllToDos: [ToDo]
  }
 `;
