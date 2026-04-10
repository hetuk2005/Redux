import { configureStore } from "@reduxjs/toolkit";

import { counterSlicer } from "../Slicer/counterSlicer";

export const myStore = configureStore({
  reducer: {
    counts: counterSlicer,
  },
});
