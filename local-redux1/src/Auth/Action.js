export const REMOVE_TOKEN = "REMOVE_TOKEN";

export const LOGIN_SUCCESSFULL = "LOGIN_SUCCESSFULL";
export const LOGIN_FALIURE = "LOGIN_FALIURE";
export const LOGIN_REQUEST = "LOGIN_REQUEST";

export const getLogin = () => {
  return { type: REMOVE_TOKEN };
};

export const handleSuccessful = (payload) => {
  return { type: LOGIN_SUCCESSFULL, payload: payload };
};

export const handleFailure = (payload) => {
  return { type: LOGIN_FALIURE, payload: payload };
};
