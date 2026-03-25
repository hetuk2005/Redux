import { createSlice, nanoid } from "@reduxjs/toolkit";

const Reducer = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },

  reducers: {
    addTodo: (state, action) => {
      let todo = {
        id: nanoid(),
        text: action.payload,
        isEdit: false,
        isCompleted: false,
      };

      state.todo.push(todo);
    },

    deleteTodo: (state, action) => {
      state.todo.splice(
        state.todo.findIndex((el) => el.id === action.payload),
        1,
      );
      //   state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = Reducer.reducer;

export const TodoSlicer = Reducer.reducer;
