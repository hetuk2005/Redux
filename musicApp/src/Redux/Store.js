import {
  compose,
  legacy_createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";

import { reducer as musicReducer } from "./App/Reducer";
import { Reducer as authReducer } from "./Auth/Reducer";

const rootTerminal = combineReducers({
  auth: authReducer,
  app: musicReducer,
});

const composeEnhancer =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify Extension's Options Like Name, actionsBlackList, actionsCreators, Serialize...
      })
    : compose;

const enhancer = composeEnhancer(applyMiddleware(thunk));

export const myStore = legacy_createStore(rootTerminal, enhancer);
