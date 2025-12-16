import "./App.css";
import { useState } from "react";
import { CounterEffect } from "./Components/CounterEffect";

function App() {
  const [toogle, setToogle] = useState(true);

  return (
    <>
      {toogle && <CounterEffect />}
      <button
        onClick={() => {
          setToogle((prev) => !prev);
        }}
      >
        Toogle
      </button>
    </>
  );
}

export default App;
