import React, { useState } from "react";
import { render } from "react-dom";

var RadioButtonExample = () => {
  var [letter, setLetter] = useState("");

  console.log(letter);

  return (
    <form>
      <input
        type="radio"
        value="a"
        checked={letter === "a"}
        onChange={() => setLetter("a")}
      />
      <input
        type="radio"
        value="b"
        checked={letter === "b"}
        onChange={() => setLetter("b")}
      />
      <input
        type="radio"
        value="c"
        checked={letter === "c"}
        onChange={() => setLetter("c")}
      />
      <div>Blah</div>
    </form>
  );
};

export default RadioButtonExample;
