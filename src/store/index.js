import { createStore } from "redux";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    console.log("increment");
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    console.log("decrement");
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = createStore(counterReducer);

export default store;
