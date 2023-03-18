import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText  );
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText  );
  };
  const handleOnchange = (event) => {
    setText(event.target.value)
  }
  const handleClearText = () =>{
    setText("");
  }
  const handleCopyText = () =>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          className="form-control"
          id="myBox"
          rows="8"
          onChange={handleOnchange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLowClick}>
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-1" onClick={handleClearText}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopyText}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
        Handle Extra Spaces
      </button>
    </div>
    <div className="container my-3">
        <h1>Your text summary is </h1>
        <p>{text.split(" ").length} words, {text.length} Characters.    </p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  );
}
