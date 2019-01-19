import React, { Component } from "react";

import Parent from "./parent";

class Grandparent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rayudu",
      age: 36
    };
  }
  render() {
    return (
      <div>
        <h1> Grand Parent </h1>
        <h1>{this.state.name}</h1>
        <Parent name={this.state.name} />
      </div>
    );
  }
}

export default Grandparent;
