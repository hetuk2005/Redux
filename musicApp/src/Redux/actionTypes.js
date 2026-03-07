import axios from "axios";

import * as types from "./Action";

const getMusicRequest = () => {
  return {
    type: types.GET_MUSIC_REQUEST,
  };
};

const getMusicSuccess = (payload) => {
  return {
    type: types.GET_MUSIC_SUCCESS,
    payload,
  };
};

const getMusicFailure = (payload) => {
  return {
    type: types.GET_MUSIC_FAILURE,
    payload,
  };
};

export const getMusicRecords = (dispatch) => {
  dispatch(getMusicRequest());
  axios
    .get("http://localhost:8080/albums")
    .then((res) => {
      dispatch(getMusicSuccess(res.data));
    })
    .catch((err) => dispatch(getMusicFailure(err)));
};
