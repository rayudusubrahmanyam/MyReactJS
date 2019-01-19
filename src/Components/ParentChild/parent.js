import React, { Component } from "react";
import Child from "./child";
class Parent extends Component {
  render() {
    return (
      <div>
        <h1> Parent </h1>
        <h2> {this.props.name}</h2>
        <Child name={this.props.name} />
      </div>
    );
  }
}

export default Parent;
