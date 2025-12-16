import { useEffect, useState } from "react";

export const CounterEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let id = setInterval(() => {
      console.log("This Is Time", Date.now());
    }, 1000);
    // console.log("Id: ", id);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>Counter : {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setCount((prev) => prev - 1)}>Decrement</button>
    </>
  );
};
