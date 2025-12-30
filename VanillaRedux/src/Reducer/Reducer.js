import * as type from "./Action";

const initialState = { count: 0 };

export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREMENT:
      return {
        ...state,
        count: state.count++,
      };

    /*
    continue
    break
    return
    */

    default:
      return state;
  }
};
