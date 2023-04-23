import React, { useState } from 'react';
import '../Styles/Class.css';


function ClassRect({ className, description }) {

  const [inputValue, setInputValue] = useState("");
  const [outputValue, setOutputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOutputClick = () => {
    setOutputValue(outputValue + inputValue + "\n");
    setInputValue("");
  };




  return (
    <div id="boxDesign">
      <div id="classStyle">
        <h2>Class: {className}</h2>
      </div>
      <p>Class Description: {description}</p>
      <h3> Reviews </h3>

      <div className='rowC'>
      <textarea value={inputValue} onChange={handleInputChange} />
      <button id = "review_button" onClick={handleOutputClick}> Submit</button>
      </div>
      <p style={{ whiteSpace: "pre-wrap" }}>{outputValue}</p>
    </div>
  );
}

export default ClassRect;
