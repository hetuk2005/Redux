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
    case types.DELETETODO: {
      return {
        ...state,
        todo: state.todo.filter((el) => el.id !== payload),
      };
    }
    case types.EDITTODO: {
      return {
        ...state,
        todo: state.todo.map((el) =>
          el.id === payload ? { ...el, isEdit: true } : el
        ),
      };
    }
    default:
      return state;
  }
};
