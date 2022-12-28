import React, { useState } from "react";
import "./Button.css";

const Button = () => {
  const [value, setValue] = useState("Click Me");
  const [counter, setCounter] = useState(1);

  const handleClick = () => {
    setCounter(counter + 1);
    if (counter % 3 === 0) {
      setValue("Bang");
    } else {
      setValue("Click Me");
    }
  };

  return (
    <div className="btn-container">
      <button onClick={handleClick}>{value}</button>
    </div>
  );
};

export default Button;
