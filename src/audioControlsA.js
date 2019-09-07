import React, { useState } from "react";

export default function AudioControls() {
  var [volume, setVolume] = useState(85);
  var [treble, setTreble] = useState(33);
  var [mid, setMid] = useState(71);
  var [bass, setBass] = useState(92);

  return (
    <span>
      <div>
        <button
          style={buttonStyle}
          onClick={() => setVolume((volume = volume + 1))}
        >
          <h3>+</h3>
        </button>
        {volume} Volume
        <button
          style={buttonStyle}
          onClick={() => setVolume((volume = volume - 1))}
        >
          <h3>-</h3>
        </button>
      </div>

      <div>
        <button
          style={buttonStyle}
          onClick={() => setTreble((treble = treble + 1))}
        >
          <h3>+</h3>
        </button>
        {treble} Treble
        <button
          style={buttonStyle}
          onClick={() => setTreble((treble = treble - 1))}
        >
          <h3>-</h3>
        </button>
      </div>

      <div>
        <button style={buttonStyle} onClick={() => setMid((mid = mid + 1))}>
          <h3>+</h3>
        </button>
        {mid} Mid
        <button style={buttonStyle} onClick={() => setMid((mid = mid - 1))}>
          <h3>-</h3>
        </button>
      </div>

      <div>
        <button style={buttonStyle} onClick={() => setBass((bass = bass + 1))}>
          <h3>+</h3>
        </button>
        {bass} Bass
        <button style={buttonStyle} onClick={() => setBass((bass = bass - 1))}>
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
