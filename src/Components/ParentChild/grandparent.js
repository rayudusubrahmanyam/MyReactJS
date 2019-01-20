import React, { Component } from "react";

import Parent from "./parent";

class Grandparent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "rayudu"
    };
  }

  changeName = newName => {
    //let newState = Object.assign({}, this.state);
    //newState.name = "Puneeth";
    this.setState({
      name: newName
    });
    //this.setState({ newState });
  };

  changeText = event => {
    //let newState = Object.assign({}, this.state);
    //newState.name = "Puneeth";
    console.log(event.traget.value);
    this.setState({
      name: event.traget.value
    });
    //this.setState({ newState });
  };

  render() {
    return (
      <div>
        <h1> Grand Parent </h1>
        <button
          onClick={() => {
            this.changeName("Puneeth");
          }}
        >
          Click Me :(
        </button>
        <button onClick={this.changeName.bind(this, "Puneeth")}>
          Click Me :)
        </button>
        <h1>{this.state.name}</h1>

        <input type="text" onChange={this.changeText} value={this.state.name} />
        {/*<Parent
          name={this.state.name}
          changeName={this.changeName.bind(this)}
        />
        */}
      </div>
    );
  }
}

export default Grandparent;
