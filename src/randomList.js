import React, { useState } from "react";

export default function RandomList() {
  //Create an array, and a function to manipulate the array
  var [items, setItems] = useState([]);

  var addItem = () => {
    var random = Math.random() * 10;
    setItems([...items, random]);
  };

  var key = 0;

  return (
    <div>
      <button onClick={() => addItem()}>Add Number</button>
      {items.map(item => (
        <div key={key++}>{item}</div>
      ))}
    </div>
  );
}
