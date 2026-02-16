import React from "react";

export const Button = ({ name, backgroundColor }) => {
  return (
    <>
      <button
        style={{
          borderColor: backgroundColor,
          "--btn-color": backgroundColor,
          color: "#000",
        }}
      >
        {name}
      </button>
    </>
  );
};
