import React, { useState } from "react";

var InputExample = () => {
  var [text, setText] = useState("");

  var handleChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default InputExample;
