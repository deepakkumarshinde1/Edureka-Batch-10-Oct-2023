import { useState } from "react";

const FormApp = (props) => {
  let [inputText, setInputText] = useState(0);
  let [value, setValue] = useState(0);
  let [display, setDisplay] = useState("flex");
  let { text } = props;
  let saveData = () => {
    setValue(inputText * inputText);
    setDisplay("none");
  };

  let changeInput = (e) => setInputText(Number(e.target.value));
  return (
    <>
      <h1>Welcome {text}</h1>
      <p>
        Square of number {inputText} is {value}
      </p>
      <span style={{ display: display }}>This is text</span>
      <div>
        <label htmlFor="userValue">Value</label>
        <input
          type="text"
          placeholder="enter value"
          value={inputText}
          id="userValue"
          onChange={changeInput}
        />
      </div>
      <button onClick={saveData}>Save</button>
    </>
  );
};

export default FormApp;
