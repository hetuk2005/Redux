import React, { useState } from "react";

import "./App.css";
import { InputBox } from "./Components/InputBox";

export const App = () => {
  const style = {
    padding: "11px",
    margin: "5px",
    width: "15px",
    border: "1px solid",
    borderRadius: "5px",
    textAlign: "center",
  };

  const [value, setValue] = useState("");
  // console.log("Value: ", value);

  return (
    <>
      <InputBox
        setMainVal={(v) => setValue(v)}
        perBox={1}
        length={4}
        style={style}
      />
      <h1>{value}</h1>
    </>
  );
};
