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
  // console.log("User Data: ", userData);
  dispatch(PostLoginRequest());

  return axios({
    method: "POST",
    url: "api/login",
    baseURL: "https://reqres.in",
    data: userData,
    headers: {
      "x-api-key": "reqres_36f1f083d4024944b478bd690e4c20a2",
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
