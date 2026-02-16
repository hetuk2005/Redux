import React, { useState } from "react";

import "./App.css";
import { InputBox } from "./Components/InputBox";

export const App = () => {
  const style = {
    padding: "11px",
    margin: "5px",
    width: "15px",
    border: "2px solid",
    borderRadius: "5px",
  };

  const [value, setValue] = useState("");
  console.log("Value: ", value);

  return (
    <>
      <InputBox length={4} style={style} />
    </>
  );
};
