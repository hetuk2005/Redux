import "./App.css";

import { HomeButton } from "./components/HomeButton";
import { SignInButton } from "./components/SignInButton";
import { Button } from "./components/Button";

function App() {
  return (
    <>
      <h1>Hello</h1>
      <HomeButton value={"Home Button"} />
      <br />
      <br />
      <SignInButton value={"Sign In"} />
      <br />
      <br />
      <Button
        value={{
          name: "Sign Up",
          style: {
            padding: ".25rem 1rem",
            borderRadius: ".4rem",
            border: "2px solid red",
            background: "transparent",
            cursor: "pointer",
          },
        }}
      />
    </>
  );
}

export default App;
