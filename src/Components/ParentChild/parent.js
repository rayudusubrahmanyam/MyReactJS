import React, { Component } from "react";
import Child from "./child";
class Parent extends Component {
  render() {
    return (
      <div>
        <h1> Parent </h1>
        <h2> {this.props.name}</h2>
        <button
          onClick={this.props.changeName.bind(this, "Puneeth")}
          value="Click Me"
        >
          {" "}
          Click Me
        </button>

        <Child name={this.props.name} changeName={this.props.changeName} />
      </div>
    );
  }
}

export default Parent;
