import React, { useState } from "react";

export const useToogle = (incomeVal) => {
  const [value, setValue] = useState(incomeVal);

  function toogleValue(val) {
    if (typeof val !== "boolean") {
      setValue(!val);
    } else {
      setValue(val);
    }
  }

  return [value, toogleValue];
};
