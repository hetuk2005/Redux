import React from "react";
import { legacy_createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { TodoReducer } from "./Reducer";

// const customMiddleWare = (store) => (next) => (action) => {
//   return typeof action === "function" ? action(store.disptach) : next(action);
// };

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const myStore = legacy_createStore(TodoReducer, enhancer);
