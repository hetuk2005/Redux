import * as types from "./ActionTypes";

const initialState = {
  fakeStore: [],
  isLoading: false,
  isError: null,
};

export const fakeReducer = (oldState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        fakeStore: payload,
      };

    case types.GET_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: payload,
      };

    default:
      return oldState;
  }
};
