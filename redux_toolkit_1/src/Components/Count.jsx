import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../Slicer/counterSlicer";

export const Count = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counts);

  return (
    <>
      <h1>Counter {count}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </>
  );
};
