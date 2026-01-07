import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import * as types from "../Reducer/Todos/Action";

export const TodoInput = () => {
  const dispatch = useDispatch();

  const inputData = useRef(null);

  const handleAdd = () => {
    const valueText = inputData.current.value;
    // console.log("Value Text: ", valueText);
    dispatch({ type: types.ADDTODO, payload: valueText });
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Todo</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <input type="text" ref={inputData} placeholder="Enter Todo" />
        <button style={{ cursor: "pointer" }} onClick={handleAdd}>
          Add
        </button>
      </div>
    </>
  );
};
