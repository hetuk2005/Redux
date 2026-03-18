import axios from "axios";

import * as types from "./Actions";

const PostLoginFailure = (data) => {
  return {
    type: types.POST_LOGIN_FAILURE,
    payload: data,
  };
};

const PostLoginSuccess = (data) => {
  return {
    type: types.POST_LOGIN_SUCCESS,
    payload: data,
  };
};

const PostLoginRequest = () => {
  return {
    type: types.POST_LOGIN_REQUEST,
  };
};

const removeToken = () => {
  return {
    type: types.TOKEN_REMOVE,
  };
};

const login = (userData) => (dispatch) => {
  console.log("User Data: ", userData);
  dispatch(PostLoginRequest());

  return axios({
    method: "POST",
    url: "api/login",
    baseURL: "https://reqres.in",
    data: userData,
    headers: {
      "x-api-key": "reqres_c27db760fb6f4b06a48a548c02bf449f",
    },
  })
    .then((res) => dispatch(PostLoginSuccess(res.data.token)))
    .catch((err) => dispatch(PostLoginFailure(err)));
};

export {
  login,
  PostLoginFailure,
  PostLoginSuccess,
  PostLoginRequest,
  removeToken,
};
