import React, { useState } from "react";

export default function AudioControls() {
  var [volume, setVolume] = useState(50);

  return (
    <span>
      <div>
        <button style={buttonStyle}>
          <h3>+</h3>
        </button>
        {volume} Volume
        <button style={buttonStyle}>
          <h3>-</h3>
        </button>
      </div>
    </span>
  );
}

var buttonStyle = {
  background: "white",
  border: "2px solid black",
  width: "50px",
  height: "50px",
  textAlign: "center",
  margin: "20px"
};
