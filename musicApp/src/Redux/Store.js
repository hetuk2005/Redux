import { compose, legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import { reducer as musicReducer } from "./Reducer";

const composeEnhancer =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify Extension's Options Like Name, actionsBlackList, actionsCreators, Serialize...
      })
    : compose;

const enhancer = composeEnhancer(applyMiddleware(thunk));

export const myStore = legacy_createStore(musicReducer, enhancer);
