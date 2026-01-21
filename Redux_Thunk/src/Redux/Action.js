import * as types from "../Redux/ActionTypes";

export const getTodoRequest = (payload) => {
  return { type: types.GET_TODO_REQUEST, payload };
};

export const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};
export const getTodoFailure = (payload) => {
  return { type: types.GET_TODO_FAILURE, payload };
};
