import { legacy_createStore, combineReducers } from "redux";

import { myOwnReducer } from "../Reducer/Count/Reducer";
import { todoReducer } from "../Reducer/Todos/Reducer";
import { authReducer } from "../Auth/Reducer";

const terminalReducer = combineReducers({
  todos: todoReducer,
  counts: myOwnReducer,
  auths: authReducer,
});

export const myOwnStore = legacy_createStore(
  terminalReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// export const myOwnStore = legacy_createStore(todoReducer);
