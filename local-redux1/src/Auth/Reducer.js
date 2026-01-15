import * as types from "./Action";

const token = localStorage.getItem("token");

const initialValue = {
  token: token ? token : "",
  isAuth: token ? true : false,
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
    case types.LOGIN_SUCCESSFULL: {
      if (action.payload !== "fakeToken") return state;

      localStorage.setItem("Token: ", action.payload);

      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: action.payload,
      };
    }
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
