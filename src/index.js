import { createStore } from "redux";

const form = document.querySelector("form"),
  input = document.querySelector("input"),
  ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state;
    case DELETE_TODO:
      return state;
    default:
      return state;
  }
};

const store = createStore(reducer);

const createToDo = (toDo) => {
  const li = document.createElement("li");
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  createToDo(toDo);
  store.dispatch({ type: ADD_TODO });
};

form.addEventListener("submit", onSubmit);
