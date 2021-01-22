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

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const plusNumber = () => {
  countStore.dispatch({ type: "PLUS" });
};
const minusNumber = () => {
  countStore.dispatch({ type: "Minus" });
};

plus.addEventListener("click", plusNumber);
minus.addEventListener("click", minusNumber);
