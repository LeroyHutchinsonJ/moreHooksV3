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
    setCounts({ ...counts, counts: counts.countB + 1 });
  };
  return <div>Check Check Check Me</div>;
}
