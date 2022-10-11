import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../Components/Todo/TodoSlice";

export default configureStore({
  reducer: {
    todos: TodoSlice,
  }
})