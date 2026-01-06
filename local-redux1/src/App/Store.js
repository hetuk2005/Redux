import { legacy_createStore } from "redux";

// import { myOwnReducer } from "../Reducer/Count/Reducer";
import { todoReducer } from "../Reducer/Todos/Reducer";

// const terminalReducer = combineReducers({
//   todo: todoReducer,
//   count: myOwnStore,
// });

// export const myOwnStore = legacy_createStore(myOwnReducer);
export const myOwnStore = legacy_createStore(todoReducer);
