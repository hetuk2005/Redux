import * as types from "../Redux/ActionTypes";

export const getTodoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};

export const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};
export const getTodoFailure = (payload) => {
  return { type: types.GET_TODO_FAILURE, payload };
};

export const addTodoRequest = () => {
  return { type: types.ADD_TODO_REQUEST };
};

export const addTodoSuccess = (payload) => {
  return { type: types.ADD_TODO_SUCCESS, payload };
};
export const addTodoFailure = (payload) => {
  return { type: types.ADD_TODO_FAILURE, payload };
};
