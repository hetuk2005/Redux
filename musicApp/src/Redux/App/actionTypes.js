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

export const getMusicRecords = (queryData) => {
  return (dispatch) => {
    dispatch(getMusicRequest());
    axios
      .get("http://localhost:8080/albums", queryData)
      .then((res) => {
        dispatch(getMusicSuccess(res.data));
      })
      .catch((err) => dispatch(getMusicFailure(err)));
  };
};
