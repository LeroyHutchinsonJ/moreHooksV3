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
import InputExample from "./controlledInput";
import InputBox from "./inputBox";
import InputBoxUncontrolled from "./inputBoxUncontrolled";

function Index() {
  return (
    <div className="Index">
      <InputBoxUncontrolled />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<InputBoxUncontrolled />, rootElement);
