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
      <Button name="Sign Up" backgroundColor="red" />
    </>
  );
}

export default App;
