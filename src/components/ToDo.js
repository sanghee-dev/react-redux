import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

const ToDo = ({ text, deleteToDo }) => {
  return (
    <li>
      <span>{text}</span>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
