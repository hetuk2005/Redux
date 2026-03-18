import * as types from "./Actions";
import { loadData, saveData } from "../Utils/localStorage";

const token = "token";

const initialValue = {
  isAuth: loadData(token) ? true : false,
  token: loadData(token) || "",
  isError: false,
  isLoading: false,
};

export const Reducer = (oldState = initialValue, { type, payload }) => {
  switch (type) {
    case types.POST_LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.POST_LOGIN_SUCCESS:
      saveData(token, payload);

      return {
        ...oldState,
        isLoading: false,
        isAuth: true,
        token: payload,
      };

    case types.POST_LOGIN_FAILURE:
      return {
        ...oldState,
        isError: true,
      };

    case types.TOKEN_REMOVE:
      return {
        ...oldState,
        isAuth: false,
        token: "",
      };

    default:
      return oldState;
  }
};
