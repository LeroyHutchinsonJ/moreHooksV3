import React, { useState } from "react";

export default function Room() {
  //useState hook is being used to mess with the light variable
  var [light, setLight] = useState(false);

  //This variable switches depending on the value of the light boolean
  var text = light ? "Light is on" : "Light is off";

  return (
    <div>
      <div>{text}</div>
      <button onClick={() => setLight(!light)}>Touch me to switch light</button>
    </div>
  );
}
