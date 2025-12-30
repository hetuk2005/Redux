import { legacy_createStore } from "redux";

import { CounterReducer } from "../Reducer/Reducer";

export const myStore = legacy_createStore(CounterReducer);
