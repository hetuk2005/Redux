import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useSelector((state) => state.auths);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }

  return children;
};
