import React from "react";

import { Button } from "./Button";

export const HomeButton = ({value}) => {
  return (
    <>
      <Button name={value} backgroundColor="yellow" />
    </>
  );
};
