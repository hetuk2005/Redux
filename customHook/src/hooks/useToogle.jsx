import React, { useState } from "react";

export const useToogle = (incomeVal) => {
  const [value, setValue] = useState(incomeVal);
  console.log("IncomeVal: ", incomeVal);

  function toogleValue(val) {
    if (typeof val !== "boolean") {
      setValue(!value);
    } else {
      setValue(val);
    }
  }

  return [value, toogleValue];
};
