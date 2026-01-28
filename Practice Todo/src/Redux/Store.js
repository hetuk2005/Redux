import React from "react";
import { legacy_createStore } from "redux";

import { fakeReducer } from "../Redux/Reducer";

export const myStore = legacy_createStore(fakeReducer);
