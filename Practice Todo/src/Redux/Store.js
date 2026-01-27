import React from "react";
import { legacy_createStore, compose } from "redux";

import { Reducer } from "./Reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const myStore = legacy_createStore(Reducer, composeEnhancers);
