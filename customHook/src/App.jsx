/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { useLoacalStorage } from "./hooks/useLocalStorage";
import { useToogle } from "./hooks/useToogle";

function App() {
  const [string, setString] = useState("");

  const [value, setValue] = useLoacalStorage("name", []);

  const [toogle, setToogle] = useToogle();

  return (
    <>
      {/* <input type="text" onChange={(e) => setString(e.target.value)} />
      <button onClick={() => setValue(string)} style={{ cursor: "pointer" }}>Click</button> */}

      {toogle && <h1>I Am Invoked</h1>}
      <button onClick={() => setToogle(true)} style={{ cursor: "pointer" }}>
        On
      </button>
      <button onClick={() => setToogle(false)} style={{ cursor: "pointer" }}>
        Off
      </button>
    </>
  );
}

export default App;
