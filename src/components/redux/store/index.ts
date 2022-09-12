// import { createStoreHook, legacy_createStore as createStore } from "react-redux";
import { legacy_createStore as createStore } from "redux";

const reducerFn = (state = { counter: 0 }, action: { type: string; payload: number; }) => {
  // always be a sync function
  // do not mutate original state
  if (action.type === "INC") {
    return { counter: state.counter + 1 };
  }
  if (action.type === "DEC") {
    return { counter: state.counter - 1 };
  }
  if (action.type === "ADD") {
    return { counter: state.counter + action.payload };
  }
  if (action.type === "RESET") {
    return { counter: 0 };
  }
  return state;
};

const store = createStore(reducerFn);
export default store;