import React, { useRef, useState } from "react";

var InputBoxUncontrolled = () => {
  var first = useRef("");
  var last = useRef("");

  var [firstName, setFirstName] = useState("");
  var [lastName, setLastName] = useState("");

  var confirm = () => {
    setFirstName(first.current.value);
    setLastName(last.current.value);
  };

  return (
    <div>
      <div>
        Input Your First Name <input type="text" ref={first} />
      </div>
      <br />
      <div>
        Input Your Last Name <input type="text" ref={last} />
      </div>
      <button style={buttonStyle} onClick={confirm}>
        Click Me
      </button>
      <div />
      Hello {firstName} {lastName}
    </div>
  );
};

var buttonStyle = {
  backgroundColor: "white",
  padding: "10px",
  border: "1px solid black",
  fontSize: "15px"
};
export default InputBoxUncontrolled;
