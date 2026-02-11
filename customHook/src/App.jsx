import { useState } from "react";
import "./App.css";
import { useToogle } from "./hooks/useToogle";
import { useLoacalStorage } from "./hooks/useLocalStorage";
import { useFetch } from "./hooks/useFetch";

function App() {
  const { data } = useFetch("https://fakestoreapi.com/products");
  console.log("Data: ", data);

  const [string, setString] = useState("");

  const [value, setValue] = useLoacalStorage("name", []);

  const [toogle_2, setToogle_2] = useToogle();

  const [toogle, setToogle] = useToogle();

  return (
    <>
      <input type={toogle ? "text" : "password"} />
      <button onClick={setToogle} style={{ cursor: "pointer" }}>
        {toogle ? "Hide" : "Show"}
      </button>

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

      <br />
      <br />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          justifyItems: "center",
          alignContent: "center",
        }}
      >
        {data?.map((el) => (
          <div
            key={el.id}
            style={{ border: "1px solid", margin: "11px", width: "100%" }}
          >
            <img src={el.image} alt="Image" style={{ width: "51%" }} />
            <h4>{el.title}</h4>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
