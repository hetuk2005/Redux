import * as types from "./Action";

const token = localStorage.getItem("token");

const initialValue = {
  token: token ? token : "",
  isAuth: false,
  isError: null,
  isLoading: false,
};

export const authReducer = (state = initialValue, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.LOGIN_SUCCESSFULL:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
      };
    case types.LOGIN_FALIURE:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
      };
    default:
      return state;
  }
};
