import * as types from "./ActionTypes";

export const getRequest = () => {
  return { type: types.GET_REQUEST };
};

export const getSuccess = (payload) => {
  return { type: types.GET_SUCCESS, payload };
};

export const getFailure = (payload) => {
  return { type: types.GET_FAILURE, payload };
};
