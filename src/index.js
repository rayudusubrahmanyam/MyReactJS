import React from "react";
import ReactDOM from "react-dom";
import Jsxexam, { Listcomp } from "./Components/Jsxexample";
import Clock from "./Components/Clock";
import Grandparent from "./Components/ParentChild/grandparent";
import Fragmentexam from "./Components/Fragments";
import Parentcomp from "./Components/compHooks";
import Refsexam from "./Components/Refsexam";
import Keysexam from "./Components/Keys";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>ReactJS Application</h1>
      <h2>Get Start editing to see some magic happen!</h2>
      <Keysexam />
    </div>
  );
}

//ReactDOM.render(<Clock />, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));
