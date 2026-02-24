import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

import { PinItems } from "./PinItems";

export const InputBox = ({ perBox, setMainVal, length, style }) => {
  const [values, setValues] = useState(new Array(length).fill(""));
  const elements = useRef(new Array(length).fill(0));

  const handleChange = (v, i) => {
    const vals = [...values];
    vals[i] = v;
    setValues(vals);

    if (i < vals.length - 1) {
      elements.current[i + 1].focus();
      setMainVal(vals.join(""));
    }
  };

  const handleBackSpace = (i) => {
    console.log("Values: ", values);
    const vals = [...values];
    vals[i] = "";
    setValues(vals);

    if (i === 0) return;
    elements.current[i - 1].focus();
    setMainVal(vals.join(""));
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
          handleBackSpace={() => handleBackSpace(index)}
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

InputBox.defaultProps = {
  label: "Hello",
  length: 3,
  perBox: 1,
};
