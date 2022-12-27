import { ToDoModel } from "./models.js";
export const ToDoResolvers = {
    Query: {
        async getAllToDos(_) {
            return await ToDoModel.find();
        }
    },
};
