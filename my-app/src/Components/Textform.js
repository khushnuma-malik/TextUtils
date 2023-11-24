import React, { useState } from 'react';
import './Textform.css';

const Textform = (props) => {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toUpperCase();

    setText(newText);
  }
  const handleLoClick = () => {
    console.log("Uppercase was clicked");
    let newText = text.toLowerCase();

    setText(newText);
  }
  const handleClearClick = () => {
    console.log("Uppercase was clicked");
    let newText = '';

    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("Text changed");
    setText(event.target.value);
  }

  const [text, setText] = useState(''); // uase states

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} id="MyBox" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">Convert To Uppercase</button>
        <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2">Convert To LowerCase</button>
        <button type="button" onClick={handleClearClick} className="btn btn-danger mx-2">Clear Text</button>
      </div>
      <div className='container my-3'>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008*text.split(" ").length } Read Minutes </p>
        <h3> Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default Textform;


