import { useState } from "react";
import "./App.css";
import { useLoacalStorage } from "./hooks/useLocalStorage";
import { useToogle } from "./hooks/useToogle";

function App() {
  const [string, setString] = useState("");

  const [value, setValue] = useLoacalStorage("name", []);

  const [toogle, setToogle] = useToogle();

  const [toogle_2, setToogle_2] = useToogle();

  return (
    <>
      <input type="text" onChange={(e) => setString(e.target.value)} />
      <button onClick={() => setValue(string)} style={{ cursor: "pointer" }}>
        Click
      </button>

      <br />
      <br />

      {toogle && <h1>I Am Invoked</h1>}
      <button onClick={setToogle}>Toggle</button>
      <button onClick={() => setToogle(true)} style={{ cursor: "pointer" }}>
        On
      </button>
      <button onClick={() => setToogle(false)} style={{ cursor: "pointer" }}>
        Off
      </button>

      <br />
      <br />

      {toogle_2 && <h1>I Am Invoked Again</h1>}
      <button onClick={setToogle_2}>Toggle 2</button>
      <button onClick={() => setToogle_2(true)} style={{ cursor: "pointer" }}>
        On
      </button>
      <button onClick={() => setToogle_2(false)} style={{ cursor: "pointer" }}>
        Off
      </button>
    </>
  );
}

export default App;
