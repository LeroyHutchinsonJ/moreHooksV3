import React, { useState } from "react";

export default function StepTracker() {
  var [steps, stepTracker] = useState(0);

  return (
    <div>
      <div>I took {steps} steps today!</div>
      <button onClick={() => stepTracker((steps += 1))} style={buttonStyle}>
        I Took Another Step{" "}
      </button>
    </div>
  );
}

var buttonStyle = {
  background: "white",
  border: "1px solid black"
};
