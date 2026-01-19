import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import * as types from "../Reducer/Count/Action";
import "../App.css";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counts.count);
  // console.log("Value: ", value);

  const [inputValue, setInputValue] = useState(0);

  const handleInc = () => {
    dispatch({ type: types.INCREMENT });
  };

  const handleDec = () => {
    dispatch({ type: types.DECREMENT });
  };

  const handleIncByValue = () => {
    dispatch({
      type: types.INCREMENTBYVALUE,
      payload: Number(inputValue),
    });
  };

  const handleDecByValue = () => {
    dispatch({
      type: types.DECREMENTBYVALUE,
      payload: Number(inputValue),
    });
  };

  return (
    <>
      <h1>Counter {value}</h1>
      <button onClick={handleInc}>+</button>
      <button onClick={handleDec}>-</button>
      <br />
      <br />
      <input
        type="number"
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter Value"
      />
      <br />
      <br />
      <button onClick={handleIncByValue}>++</button>
      <button onClick={handleDecByValue}>--</button>
    </>
  );
};
