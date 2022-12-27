import { ToDoModel } from "./models.js";

export const ToDoQueries = {
  todos: async () => {
    return await ToDoModel.find();
  }
};