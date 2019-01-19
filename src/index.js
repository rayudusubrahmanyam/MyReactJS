import React from "react";
import ReactDOM from "react-dom";
import Jsxexam, { Listcomp } from "./Components/Jsxexample";
import Clock from "./Components/Clock";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>ReactJS Application</h1>
      <h2>Get Start editing to see some magic happen!</h2>
      <Jsxexam />
      <Listcomp />
    </div>
  );
}

ReactDOM.render(<Clock />, document.getElementById("root"));
//ReactDOM.render(<App />, document.getElementById("root"));
