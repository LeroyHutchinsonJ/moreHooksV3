import React, { useState } from "react";
import "./audioControlsExample.css";
const Control = ({ value, children, onIncrease, onDecrease }) => (
  <div className="control">
    <button onClick={onDecrease}>&ndash;</button>
    <div>
      <span className="value">{value}</span>
      <span className="label">{children}</span>
    </div>
    <button onClick={onIncrease}>+</button>
  </div>
);

// This version stores the state in a single object
const AudioControlsWithOneObject = () => {
  const [{ volume, bass, mid, treble }, setValues] = useState({
    volume: 53,
    bass: 17,
    mid: 51,
    treble: 32
  });

  const increase = key => () => {
    setValues(values => ({
      ...values,
      [key]: values[key] + 1
    }));
  };

  const decrease = key => () => {
    setValues(values => ({
      ...values,
      [key]: values[key] - 1
    }));
  };

  return (
    <div className="audio-controls">
      <Control
        value={volume}
        onIncrease={increase("volume")}
        onDecrease={decrease("volume")}
      >
        VOLUME
      </Control>

      <Control
        value={treble}
        onIncrease={increase("treble")}
        onDecrease={decrease("treble")}
      >
        TREBLE
      </Control>

      <Control
        value={mid}
        onIncrease={increase("mid")}
        onDecrease={decrease("mid")}
      >
        MID
      </Control>

      <Control
        value={bass}
        onIncrease={increase("bass")}
        onDecrease={decrease("bass")}
      >
        BASS
      </Control>
    </div>
  );
};

export default AudioControlsWithOneObject;
