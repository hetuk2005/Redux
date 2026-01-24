import React, { useRef } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  getApi,
  addTodoSuccess,
  addTodoFailure,
  addTodoRequest,
} from "../Redux/Action";

export const TodoInput = () => {
  const inputValue = useRef();
  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(addTodoRequest);
    if (inputValue && inputValue.current.value.trim() !== "") {
      let data = {
        title: inputValue.current.value,
        status: false,
      };

      return axios
        .post("http://localhost:8080/todo", data)
        .then((res) => {
          dispatch(addTodoSuccess);
          return res;
        })
        .catch((err) => {
          console.log(err);
          dispatch(addTodoFailure);
        });
    }
  };

  const handleAdd = () => {
    addTodo().then(() => dispatch(getApi));
  };

  return (
    <>
      <input type="text" ref={inputValue} />
      <button onClick={handleAdd} style={{ cursor: "pointer" }}>
        Add
      </button>
    </>
  );
};
