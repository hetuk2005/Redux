import { legacy_createStore } from "redux";

import { CounterReducer } from "../Reducer/Reducer";
import * as type from "../Reducer/Action";

export const myStore = legacy_createStore(CounterReducer);

const newInitialReducer = { count: 10 };

const newReducer = (state = newInitialReducer, action) => {
  switch (action.type) {
    // Double
    case type.DOUBLE:
      return {
        ...state,
        count: state.count + 1,
      };

    // Increment
    case type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    // Decrement
    case type.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

setTimeout(() => {
  console.log("This Is The Invocation Of My newReducer");

  myStore.replaceReducer(newReducer);
  myStore.dispatch({ type: type.DOUBLE });
  console.log("Reducer Updated With Double");
}, 10000);
