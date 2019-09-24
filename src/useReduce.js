import React, { useReducer } from "react";

var Counter = () => {
  const [sum, dispatch] = useReducer((state, action) => {
    return state + action;
  }, 0);

  return (
    <div>
      <div>{sum}</div>
      <button onClick={() => dispatch(2)}>Add One</button>
    </div>
  );
};

export default Counter;
