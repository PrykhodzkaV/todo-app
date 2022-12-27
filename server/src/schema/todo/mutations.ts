import { ToDoModel } from "./models.js";

export const ToDoMutations = {
    deleteToDoById: async (_, { id }) => {
        const wasDeleted = (await ToDoModel.deleteOne({ _id: id })).deletedCount;
        return wasDeleted;
    },
    createTodo: async (_, { toDoInput: { title } }) => {
        const newToDo = new ToDoModel({ title: title, status: false });
        const result = await newToDo.save();
        return result;
    },
    editTodo: async (_, { id, toDoInput: { title, status } }) => {
        const wasEdited = (await ToDoModel.updateOne({ _id: id }, {title:title, status:status})).modifiedCount;
        return wasEdited;
    },
};