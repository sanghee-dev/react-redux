import { createStore } from "redux";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

export const addTodo = (text) => {
  return { type: ADD_TODO, text: text, id: Date.now() };
};
export const deleteToDo = (id) => {
  return { type: DELETE_TODO, id };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: action.id }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
