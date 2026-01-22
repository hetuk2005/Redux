import * as types from "./ActionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: null,
};

export const TodoReducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_TODO_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        todos: payload,
      };

    case types.GET_TODO_FAILURE:
      return {
        ...oldState,
        isLoading: true,
        isError: payload,
      };

    case types.ADD_TODO_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.ADD_TODO_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        // todos: [...oldState.todos, payload],
      };

    case types.ADD_TODO_FAILURE:
      return {
        ...oldState,
        isLoading: true,
        isError: payload,
      };

    default:
      return oldState;
  }
};
