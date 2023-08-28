import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InputURL = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  };

  return (
    <div className="inputCont text-dark">
      <h1>
        URL <span>Shortener</span>
      </h1>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Input your link"
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  );
};

export default InputURL;
