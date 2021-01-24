import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Detail = ({ toDo, id }) => {
  const date = new Date(toDo?.id);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const currentTime = `${year < 10 ? `0${year}` : year}.${
    month < 10 ? `0${month}` : month
  }.${day < 10 ? `0${day}` : day}.${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;

  return (
    <>
      <h1>{toDo?.text}</h1>
      <h4>Created at: {currentTime}</h4>
      <Link to="/">
        <button>HOME</button>
      </Link>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) };
};

export default connect(mapStateToProps)(Detail);
