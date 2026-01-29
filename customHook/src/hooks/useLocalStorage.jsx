import React, { useEffect, useState } from "react";

export const useLoacalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const saveData = localStorage.getItem(key);
    return saveData ? JSON.parse(saveData) : initialValue;
  });

  const updateValue = (newData) => {
    setValue((prev) => {
      return [...prev, newData];
    });
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, updateValue];
};
