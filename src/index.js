import React from "react";
import ReactDOM from "react-dom";
import StepTracker from "./stepTracker";
import "./styles.css";

function Index() {
  return (
    <div className="Index">
      <StepTracker />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
