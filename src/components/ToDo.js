import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, deleteToDo, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        <span>{text}</span>
      </Link>
      <button onClick={deleteToDo}>DEL</button>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    id: ownProps.id,
    deleteToDo: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
