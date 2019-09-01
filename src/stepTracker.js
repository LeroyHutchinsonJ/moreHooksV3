import React from "react";
import { useState } from "react";

export default function StepTracker() {
  var [steps, StepTracker] = useState(0);

  return (
    <div>
      <div>I took {steps} steps today!</div>
      <button style={buttonStyle}>I Took Another Step</button>
    </div>
  );
}

var buttonStyle = {
  background: "white",
  border: "1px solid black"
};
