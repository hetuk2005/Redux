import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { TodoLogin } from "../Pages/TodoLogin";
import { TodoSign } from "../Pages/TodoSignUp";
import { Todo } from "../Pages/Todo";
import { Counter } from "../Components/Counter";
import { Navbar } from "../Components/Navbar";
import { PrivateRoute } from "../Components/PrivateRoute";

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<TodoLogin />}></Route>
        <Route path="/signup" element={<TodoSign />}></Route>
        <Route
          path="/todo"
          element={
            <PrivateRoute>
              <Todo />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/counter"
          element={
            <PrivateRoute>
              <Counter />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
};
