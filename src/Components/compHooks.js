import React, { Component } from "react";
import Childcomp from "./Childcomp";
class Parentcomp extends Component {
  constructor(props) {
    super(props);
    console.log("constructor ...");
    this.state = { name: "Rayudu" };
  }
  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
  ChangeState() {
    this.setState({ name: "Puneeth" });
  }
  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
  }
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <div>
        <h1> Parent Component</h1>
        {this.state.name}
        <button onClick={this.ChangeState.bind(this)}> Change State </button>
        <Childcomp />
      </div>
    );
  }
}

export default Parentcomp;
