import React, { useState } from "react";

var InputExample = () => {
  var [text, setText] = useState("");

  var handleChange = event => {
   var text = event.target.value;

   setText(
     text.replace(/[0-9]/g, '')
     )

  };

  return (
    <div>
      <input type="text"  value={text} onChange={handleChange}/>
    </div>
  );
};

export default InputExample;
