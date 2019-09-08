import React from "react";
import ReactDOM from "react-dom";
import StepTracker from "./stepTracker";
import "./styles.css";
import RandomList from "./randomList";
import MultiCounter from "./multiCounter";
import Room from "./room";
import AudioControlsA from "./audioControlsA";
import AudioControlsB from "./audioControlsB";
import AudioControlsWithOneObject from "./audioControlsExample";

function Index() {
  return (
    <div className="Index">
      <AudioControlsWithOneObject />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
