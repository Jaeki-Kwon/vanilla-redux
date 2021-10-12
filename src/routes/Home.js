import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../Components/ToDo";

function Home({ toDos, addToDo }) {
  const [text, settext] = useState("");
  function onChange(e) {
    settext(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    // console.log(text);
    addToDo(text);
    settext("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  //   console.log(state);
  return { toDos: state };
}

function mapDistpatchToProps(dispatch, ownProps) {
  console.log("Dispatch : ", dispatch);
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home);
