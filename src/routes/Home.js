import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button type="submit">ADD</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
