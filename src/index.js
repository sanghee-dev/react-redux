import { createStore } from "redux";

const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  number = document.querySelector(".number");

const countModifier = (count = 0, action) => {
  if (action.type === "PLUS") {
    return count + 1;
  } else if (action.type === "Minus") {
    return count - 1;
  }
  return count;
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "PLUS" });

console.log(countStore.getState()); // 1
