import React, { useState } from "react";

export default function RandomList() {
  //Create an array, and a function to manipulate the array
  var [item, setItem] = useState([]);

  //The addItem function copies the array and then adds one random number to the array with the ide equal to the array length
  var addItem = () => {
    setItem([
      ...item,
      {
        id: item.length,
        value: Math.random() * 100
      }
    ]);
  };

  return (
    <div>
      <button onClick={() => addItem()}>
        Click me to increase the array number
      </button>
      <div>The list goes</div>

      <div>
        {item.map(num => (
          <div key={num.id}>{num.value}</div>
        ))}
      </div>
    </div>
  );
}
