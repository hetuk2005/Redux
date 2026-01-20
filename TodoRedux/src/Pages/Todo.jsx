import React from "react";

import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { TodoLogin } from "./TodoLogin";
import { TodoSign } from "./TodoSignUp";

export const Todo = () => {
  return (
    <>
      {/* <TodoSign />
      <TodoLogin /> */}
      <TodoInput />
      <TodoList />
    </>
  );
};
