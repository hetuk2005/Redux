import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as types from "../Reducer/Todos/Action";

export const TodoInput = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.todo);
  console.log("Value: ", value);

  const inputData = useRef(null);

  const handleAdd = () => {
    const valueText = inputData.current.value;
    // console.log("Value Text: ", valueText);
    dispatch({ type: types.ADDTODO, payload: valueText });
  };

  return (
    <>
      <h1>Todo</h1>
      <input type="text" ref={inputData} />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
