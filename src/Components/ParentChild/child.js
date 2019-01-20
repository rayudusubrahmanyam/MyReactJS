import React from "react";

const Child = props => {
  return (
    <div>
      <h1>Child</h1>
      <h1> {props.name}</h1>
      <button onClick={props.changeName.bind(this, "Vasantha")}>
        Click Me
      </button>
    </div>
  );
};

export default Child;
