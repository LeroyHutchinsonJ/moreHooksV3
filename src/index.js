import React from "react";
import ReactDOM from "react-dom";
import StepTracker from "./stepTracker";
import "./styles.css";
import RandomList from "./randomList";
import MultiCounter from "./multiCounter";

function Index() {
  return (
    <div className="Index">
      <MultiCounter />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
