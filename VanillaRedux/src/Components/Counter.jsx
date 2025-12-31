/* eslint-disable no-unused-vars */
import React from "react";

import * as type from "../Reducer/Action";
import { myStore } from "../Store/Store";

export const Counter = () => {
  // console.log("My Store: ", myStore);
  // console.log("Current State: ", myStore.getState());

  const { getState, dispatch, subscribe } = myStore;

  const [count, setCount] = React.useState(0);

  subscribe(() => {
    setCount((prev) => prev + 1);
  });

  return (
    <>
      <h1>Counter {getState().count}</h1>
      {/* <h1>Counter {count}</h1> */}
      <button onClick={() => dispatch({ type: type.DECREMENT })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: type.INCREMENT })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: type.DOUBLE })}>Double</button>
    </>
  );
};
