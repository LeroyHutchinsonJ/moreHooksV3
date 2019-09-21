import React, { useState } from "react";
import { render } from "react-dom";

var RadioButtonExample = () => {
  var [sizeLetter, setLetter] = useState("");
  var [glutenValue, setGlutenValue] = useState(false);

  return (
    <form className="pizzaForm">
      <h1>Order Your Pizza</h1>
      <h3>Size</h3>
      <div className="pizzaSizes">
        <div>
          <input
            type="radio"
            checked={sizeLetter === "a"}
            onChange={() => setLetter("a")}
          />
          Small
        </div>
        <div>
          <input
            type="radio"
            checked={sizeLetter === "b"}
            onChange={() => setLetter("b")}
          />
          Medium
        </div>
        <div>
          <input
            type="radio"
            checked={sizeLetter === "c"}
            onChange={() => setLetter("c")}
          />
          Large
        </div>
      </div>
      <br />
      <div>
        <div>Topping</div>
        <select>
          <option>Pepparoni</option>
          <option>Sausages</option>
          <option>Olive</option>
          <option>Garlic</option>
          <option>Cheesey Crumbs</option>
          <option>Poke sauce</option>
          <option>Bread Crumbs</option>
        </select>
      </div>
      <br />
      <div>
        <input
          type="radio"
          checked={glutenValue === true}
          onClick={() => setGlutenValue(!glutenValue)}
        />
        Gluten Free
      </div>
      <br />

      <div>
        <div>Special Instructions</div>
        <input />
      </div>
      <br />
      <button>Send Order</button>
    </form>
  );
};

export default RadioButtonExample;
