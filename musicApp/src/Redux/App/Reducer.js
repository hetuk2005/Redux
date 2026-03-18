import * as types from "./Action";

const initialVal = {
  musicRecords: [],
  isLoading: false,
  isError: false,
};

export const reducer = (oldState = initialVal, { type, payload }) => {
  switch (type) {
    case types.GET_MUSIC_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_MUSIC_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        musicRecords: payload,
      };

    case types.GET_MUSIC_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: { msg: true, remark: payload },
      };

    default:
      return oldState;
  }
};
