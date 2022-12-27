import { model, Schema } from "mongoose";

const todoSchema = new Schema({
    title: String,
    status: Boolean,
  });
export const ToDoModel = model('ToDo', todoSchema);