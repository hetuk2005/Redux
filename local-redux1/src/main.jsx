import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import { Provider } from "react-redux";
import { myOwnStore } from "./App/Store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={myOwnStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
