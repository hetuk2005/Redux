import axios from "axios";

import * as types from "./Action";
// import { useDispatch } from "react-redux";

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

const updateRequest = () => {
  return {
    type: types.UPDATE_MUSIC_REQUEST,
  };
};

const updateSuccess = () => {
  return {
    type: types.UPDATE_MUSIC_SUCCESS,
  };
};

const updateFailure = () => {
  return {
    type: types.UPDATE_MUSIC_FAILURE,
  };
};

export const updateMusic = (updateData) => (dispatch) => {
  dispatch(updateRequest());

  return axios
    .patch(`http://localhost:8080/albums/${updateData.id}`, {
      name: updateData.name,
    })
    .then((res) => {
      dispatch(updateSuccess(res.data));
      return res.data;
    })
    .catch((err) => {
      dispatch(updateFailure(err));
      return console.log("✈️  err: ", err);
    });
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

