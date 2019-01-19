import React from "react";

const Child = props => {
  return (
    <div>
      <h1>Child</h1>
      <h1> {props.name}</h1>
    </div>
  );
};

export default Child;
