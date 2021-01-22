import { createStore } from "redux";

const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  number = document.querySelector(".number");

const countModifier = (state = 0) => {
  console.log(state);
  return state;
};

const countStore = createStore(countModifier);

console.log(countStore.getState());
