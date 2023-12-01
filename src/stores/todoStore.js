import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../slices/todoSlice";
export const todoStore = configureStore({
  reducer: todoReducer,
});
