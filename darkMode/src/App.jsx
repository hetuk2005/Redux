import { useEffect, useState } from "react";

import "./App.css";

function DarkModeToggler({ dark, onChange }) {
  return (
    <button
      style={{ cursor: "pointer" }}
      role="switch"
      aria-checked={dark}
      onClick={() => onChange(!dark)}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

function App() {
  const [dark, setDark] = useState(
    localStorage.getItem("dark-mode") === "true",
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }

    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return (
    <>
      <DarkModeToggler dark={dark} onChange={setDark} />
    </>
  );
}

export default App;
