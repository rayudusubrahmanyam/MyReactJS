import React, { Component } from "react";

class Keysexam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          name: "Rayudu",
          age: 36
        },
        {
          name: "Puneeth",
          age: 6
        },
        {
          name: "Vasantha",
          age: 26
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1> Keys</h1>
        <ul>
          {this.state.employees.map(e => {
            return (
              <div>
                <li>
                  {e.name} | {e.age}
                </li>
                <button onClick={this.deleteItem}> Delete</button>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Keysexam;
