import axios from "axios";

import * as types from "./ActionTypes";

export const getRequest = () => {
  return { type: types.GET_REQUEST };
};

export const getSuccess = () => {
  return { type: types.GET_SUCCESS };
};

export const getFailure = (payload) => {
  return { type: types.GET_FAILURE, payload };
};

export const getApi = (dispatch) => {
  dispatch(getRequest);

  axios
    .get("https://fakestoreapi.com/products/")
    .then((res) => dispatch(getSuccess(res.data)))
    .catch((err) => {
      dispatch(getFailure);
      console.log("Error: ", err);
    });
};
