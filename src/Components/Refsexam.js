import React, { Component } from "react";
import ReactDOM from "react-dom";

class Master extends Component {
  constructor(props) {
    super(props);
    this.state = { textvalue: "Test 12345" };
    this.clearText = this.clearText.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  clearText() {
    this.setState({
      textvalue: ""
    });
    ReactDOM.findDOMNode(this.refs.myInput).focus();
  }
  updateState(e) {
    this.setState({
      textvalue: e.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Refs Example </h1>
        <input
          value={this.state.textvalue}
          onChange={this.updateState}
          ref="myInput"
        />
        <br />
        <button onClick={this.clearText}> Clear Text </button>
        <br />

        {this.state.textvalue}
      </div>
    );
  }
}

export default Master;
