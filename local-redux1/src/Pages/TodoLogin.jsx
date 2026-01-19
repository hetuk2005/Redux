import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { handleFailure, handleSuccessful } from "../Auth/Action";
import { TodoCompo } from "../Components/Login";

export const TodoLogin = () => {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector((state) => state.auths);
  const handleLogin = ({ email, pass }) => {
    if (email === "admin@gmail.com" && pass === "admin") {
      dispatch(handleSuccessful("Fake Token"));
    } else {
      dispatch(handleFailure("Wrong Credentials"));
    }
  };

  if (isLoading) return <h1 style={{ textAlign: "center" }}>Loading...</h1>;

  return (
    <>
      <TodoCompo props={handleLogin} />
      {isError && (
        <h1 style={{ textAlign: "center" }}>Something Went Wrong...</h1>
      )}
    </>
  );
};
