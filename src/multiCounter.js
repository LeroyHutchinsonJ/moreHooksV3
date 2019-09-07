import React, { useState } from "react";

export default function MultiCounter() {
  //counts is initialized as an object
  const [counts, setCounts] = useState({
    countA: 0,
    countB: 0
  });

  //Create a function named incA
  var incA = () => {
    //uses setCounts to set the value of counts to its current value but with 1 added to count A
    setCounts({ ...counts, countA: counts.countA + 1 });
  };

  var incB = () => {
    setCounts({ ...counts, countB: counts.countB + 1 });
  };

  //This is an example of what not to do when increasing values using hooks
  var badIncA = () => {
    //This is bad because it doesnt copy over countB in the update
    setCounts({ countA: counts.countA + 1 });
  };
  return (
    <div>
      <button onClick={() => incA()}>Increase A</button>
      <button onClick={() => incB()}>Increase B</button>
      <button onClick={() => badIncA()}>Bad Increase A</button>
      <br />
      This is count A<div>{counts.countA}</div>
      This is count B<div>{counts.countB}</div>
    </div>
  );
}
