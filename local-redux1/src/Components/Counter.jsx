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
      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Counter {value}</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <button onClick={handleInc}>+</button>
          <button onClick={handleDec}>-</button>
        </div>
        <br />
        <br />
        <input
          style={{
            borderRadius: "15px",
            padding: "7px 11px",
            cursor: "pointer",
            fontWeight: "700",
            letterSpacing: "1px",
            fontSize: "15px",
          }}
          type="number"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Value"
        />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <button onClick={handleIncByValue}>++</button>
          <button onClick={handleDecByValue}>--</button>
        </div>
      </div>
    </>
  );
};
