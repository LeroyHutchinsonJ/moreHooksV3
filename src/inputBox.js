import React, { useRef } from "react";

var InputBox = () => {
  var first = useRef("");
  var last = useRef("");

  return (
    <div>
      <div>
        Input Your First Name <input type="text" ref={first} />
      </div>
      <br />
      <div>
        Input Your Last Name <input type="text" ref={last} />
      </div>
      <br />
      Hello, {first.current.value} {last.current.value}
    </div>
  );
};

export default InputBox;
