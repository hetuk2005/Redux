import React, { useRef } from "react";
import axios from "axios";

export const TodoInput = ({ getApi }) => {
  const inputValue = useRef();

  const addTodo = () => {
    if (inputValue && inputValue.current.value.trim() !== "") {
      let data = {
        title: inputValue.current.value,
        status: false,
      };

      return axios
        .post("http://localhost:8080/todo", data)
        .then((res) => res)
        .catch((err) => console.log(err));
    }
  };

  const handleAdd = () => {
    addTodo().then(() => getApi());
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
