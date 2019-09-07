import React, { useState } from "react";

export default function AudioControlsB() {
  var [mid, setMid] = useState(71);
  var [bass, setBass] = useState(92);

  var [sounds, setSounds] = useState({
    volume: 85,
    treble: 33,
    mid: 71,
    bass: 92
  });

  return (
    <span>
      <div>
        <button
          style={buttonStyle}
          onClick={() => setSounds({ ...sounds, volume: sounds.volume + 1 })}
        >
          <h3>+</h3>
        </button>
        {sounds.volume} Volume
        <button
          style={buttonStyle}
          onClick={() => setSounds({ ...sounds, volume: sounds.volume - 1 })}
        >
          <h3>-</h3>
        </button>
      </div>

      <div>
        <button
          style={buttonStyle}
          onClick={() => setSounds({ ...sounds, treble: sounds.treble + 1 })}
        >
          <h3>+</h3>
        </button>
        {sounds.treble} Treble
        <button
          style={buttonStyle}
          onClick={() => setSounds({ ...sounds, treble: sounds.treble - 1 })}
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
