import React from "react";
import { legacy_createStore } from "redux";

import { TodoReducer } from "./Reducer";

export const myStore = legacy_createStore(TodoReducer);
