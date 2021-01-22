import { createStore } from "redux";

const plus = document.querySelector(".plus"),
  minus = document.querySelector(".minus"),
  number = document.querySelector(".number");

number.innerText = 0;

const PLUS = "PLUS";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const plusNumber = () => {
  countStore.dispatch({ type: PLUS });
};
const minusNumber = () => {
  countStore.dispatch({ type: MINUS });
};

plus.addEventListener("click", plusNumber);
minus.addEventListener("click", minusNumber);
