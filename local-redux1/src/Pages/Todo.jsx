import React from "react";

import { TodoInput } from "../Components/TodoInput";
import { TodoList } from "../Components/TodoList";
import { TodoLogin } from "../Components/TodoLogin";
import { TodoSign } from "../Components/TodoSignUp";

export const Todo = () => {
  return (
    <>
      <TodoSign />
      <TodoLogin />
      <TodoInput />
      <TodoList />
    </>
  );
};
