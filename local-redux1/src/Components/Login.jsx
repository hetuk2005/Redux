import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as types from "../Auth/Action";
import { TodoLogin } from "../Pages/TodoLogin";

export const LoginCompo = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auths);
  const handleLogin = ({ email, pass }) => {
    if (email === "admin@gmail.com" && pass === "admin") {
      dispatch({ type: types.LOGIN_SUCCESSFULL, payload: "fakeToken" });
    } else {
      dispatch({ type: types.LOGIN_FALIURE, payload: "Wrong Credentials" });
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <TodoLogin props={handleLogin} />
      {isError && <h1>Something Went Wrong...</h1>}
    </>
  );
};
