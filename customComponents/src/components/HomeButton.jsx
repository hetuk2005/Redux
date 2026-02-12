import React from "react";

import { Button } from "./Button";

export const HomeButton = ({ value }) => {
  return (
    <>
      <Button
        value={{
          name: value,
          style: {
            padding: ".25rem 1rem",
            borderRadius: ".4rem",
            border: "2px solid yellow",
            background: "transparent",
            cursor: "pointer",
          },
        }}
      />
    </>
  );
};
