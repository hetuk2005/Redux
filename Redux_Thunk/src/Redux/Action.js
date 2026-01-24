import * as types from "../Redux/ActionTypes";
import axios from "axios";

export const getTodoRequest = () => {
  return { type: types.GET_TODO_REQUEST };
};

export const getTodoSuccess = (payload) => {
  return { type: types.GET_TODO_SUCCESS, payload };
};

export const getApi = (dispatch) => {
  dispatch(getTodoRequest);

  axios
    .get("http://localhost:8080/todo")
    .then((res) => dispatch(getTodoSuccess(res.data)))
    .catch((err) => {
      dispatch(getTodoFailure);
      console.log("Error: ", err);
    });
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
