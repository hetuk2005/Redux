import * as types from "./Action";

const initialValue = { todo: [] };

export const todoReducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    case types.ADDTODO: {
      if (payload.trim() === "") {
        return state;
      } else {
        const todoValue = {
          id: Date.now(),
          text: payload,
          isEdit: false,
          isComplete: false,
        };
        return {
          ...state,
          todo: [...state.todo, todoValue],
        };
      }
    }
    default:
      return state;
  }
};
