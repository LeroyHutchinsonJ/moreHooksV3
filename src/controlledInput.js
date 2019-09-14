import React, { useState, useRef } from "react";

var InputExample = () => {

  var input = useRef();

  var showValue = () => {
    alert(`Input contains: ${input.current.value}`);
  }

  return(
  <div>
  <input type = "text" ref = {input}/>


  
  <button onClick = {showValue}>
  Alert The Value!
  </button>
  </div>)
}

export default InputExample;
