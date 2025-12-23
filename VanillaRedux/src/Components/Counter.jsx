import React from "react";

export const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <>
      <h1>Counter {count}</h1>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};
