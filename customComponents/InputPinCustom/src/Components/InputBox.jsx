import React, { useState } from "react";
import PropTypes from "prop-types";

import { PinItems } from "./PinItems";

export const InputBox = ({ length, style }) => {
  const [values, setValues] = useState(new Array(length).fill(0));
  console.log("Values: ", values);

  return (
    <>
      {values.map((items, index) => (
        <PinItems style={style} key={index} />
      ))}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
};

InputBox.Defaultprops = {
  label: "Hello",
};
