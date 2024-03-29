import React, { useState } from "react";
import "./audioControlsB.css";

export default function AudioControlsB() {
  var [sounds, setSounds] = useState({
    volume: 85,
    treble: 33,
    mid: 71,
    bass: 92
  });

  return (
    <>
      <div>
        <div className="mainControlBox">
          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, volume: sounds.volume + 1 })}
          >
            <h3>+</h3>
          </button>
          <div className="sideControlBox">
            <div>{sounds.volume}</div>
            <div>Volume</div>{" "}
          </div>
          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, volume: sounds.volume - 1 })}
          >
            <h3>-</h3>
          </button>
        </div>

        <div className="mainControlBox">
          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, treble: sounds.treble + 1 })}
          >
            <h3>+</h3>
          </button>
          <div className="sideControlBox">
            <div>{sounds.treble}</div>
            <div>Treble</div>
          </div>

          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, treble: sounds.treble - 1 })}
          >
            <h3>-</h3>
          </button>
        </div>

        <div className="mainControlBox">
          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, mid: sounds.mid + 1 })}
          >
            <h3>+</h3>
          </button>
          <div className="sideControlBox">
            <div>{sounds.mid}</div>
            <div>Mid</div>
          </div>

          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, mid: sounds.mid - 1 })}
          >
            <h3>-</h3>
          </button>
        </div>

        <div className="mainControlBox">
          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, bass: sounds.bass + 1 })}
          >
            <h3>+</h3>
          </button>
          <div className="sideControlBox">
            <div>{sounds.bass}</div>
            <div>Bass</div>
          </div>

          <button
            style={buttonStyle}
            onClick={() => setSounds({ ...sounds, bass: sounds.bass - 1 })}
          >
            <h3>-</h3>
          </button>
        </div>
      </div>
    </>
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
