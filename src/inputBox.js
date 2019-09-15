import React, { useState } from "react";

var InputBox = () => {
  var [fname, setFname] = useState("");
  var [lname, setLname] = useState("");

  return (
    <div>
      <div>
        Input Your First Name{" "}
        <input type="text" onChange={event => setFname(event.target.value)} />
      </div>
      <br />
      <div>
        Input Your Last Name{" "}
        <input type="text" onChange={event => setLname(event.target.value)} />
      </div>
      <br />
      Hello, {fname} {lname}
    </div>
  );
};

export default InputBox;
