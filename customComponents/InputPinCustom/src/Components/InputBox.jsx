import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { PinItems } from "./PinItems";

export const InputBox = ({ perBox, setMainVal, length, style }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  // console.log("Values: ", values);
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (v, i) => {
    const vals = [...values];
    vals[i] = v;
    setValues(vals);

    elements.current[i + 1]?.focus();
    setMainVal(values.join(""));
  };

  return (
    <>
      {values.map((items, index) => (
        <PinItems
          ref={(v) => (elements.current[index] = v)}
          style={style}
          key={index}
          max={perBox}
          handleChange={(dataVal) => handleChange(dataVal, index)}
        />
      ))}
    </>
  );
};

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  perBox: PropTypes.number.isRequired,
};

InputBox.Defaultprops = {
  label: "Hello",
  length: 3,
  perBox: 1,
};
