import * as type from "./Action";

export const CounterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case type.INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case type.DECREMENT:
      return {
        ...state,
        count: state.count - 1,
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
