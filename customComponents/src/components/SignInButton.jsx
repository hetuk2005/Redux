import React from "react";
import { Button } from "./Button";

export const SignInButton = ({ value }) => {
  return (
    <>
      <Button name={value} backgroundColor="green" />
    </>
  );
};
