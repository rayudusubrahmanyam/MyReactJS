import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import Jsxexam, { Listcomp } from "./Components/Jsxexample";
import Clock from "./Components/Clock";
import Grandparent from "./Components/ParentChild/grandparent";
import Fragmentexam from "./Components/Fragments";
import Parentcomp from "./Components/compHooks";
import Refsexam from "./Components/Refsexam";
import Keysexam from "./Components/Keys";
import Home from "./Components/Routers/Home";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>ReactJS Application</h1>

        <Home />
      </div>
    </Router>
  );
}

//ReactDOM.render(<Clock />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
