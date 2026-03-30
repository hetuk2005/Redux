import { configureStore } from "@reduxjs/toolkit";

import { TodoSlicer } from "../Redux/TodoSlicer";

export const myStore = configureStore({
  reducer: TodoSlicer,
});
