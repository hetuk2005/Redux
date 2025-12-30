import React from "react";

import { myStore } from "../Store/Store";

export const Counter = () => {
  console.log("My Store: ", myStore);
  console.log("Current State: ", myStore.getState());

  const storeValue = myStore.getState();

  // const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Counter {storeValue.count}</h1>
      {/* <h1>Counter {count}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button> */}
    </>
  );
};
