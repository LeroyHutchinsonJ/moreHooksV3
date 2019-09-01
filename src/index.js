import React from "react";
import ReactDOM from "react-dom";
import StepTracker from "./stepTracker";
import "./styles.css";
import RandomList from "./randomList";

function Index() {
  return (
    <div className="Index">
      <RandomList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
