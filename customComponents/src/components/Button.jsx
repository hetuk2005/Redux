import React from "react";

export const Button = ({ value }) => {
  return (
    <>
      <button style={value.style}>{value.name}</button>
    </>
  );
};
