/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import { useLoacalStorage } from "./hooks/useLocalStorage";

function App() {
  const [string, setString] = useState("");

  const [value, setValue] = useLoacalStorage("name", []);

  return (
    <>
      <h1></h1>
      <input type="text" onChange={(e) => setString(e.target.value)} />
      <button onClick={() => setValue(string)}>Click</button>
    </>
  );
}

export default App;
