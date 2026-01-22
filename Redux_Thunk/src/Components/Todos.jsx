/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { TodoInput } from "./TodoInput";
import * as actFunc from "../Redux/Action";

export const Todos = () => {
  const data = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getApi = () => {
    axios
      .get("http://localhost:8080/todo")
      .then((res) => dispatch(actFunc.getTodoSuccess(res.data)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApi();
  }, []);
  console.log("Data: ", data);

  return (
    <>
      <h1>Todo</h1>
      <TodoInput getApi={getApi} />
      {data.map((el) => (
        <p key={el.id}>
          {el.title} - {el.status ? "True" : "False"}
        </p>
      ))}
    </>
  );
};
