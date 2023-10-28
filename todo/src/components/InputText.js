import { forwardRef, useImperativeHandle, useRef, useState } from "react";

let InputText = (props, ref) => {
  //useRef ---> handel element / component functionality
  let [input, setInput] = useState("");
  useImperativeHandle(ref, () => {
    return {
      getInputData: () => {
        return input;
      },
      resetInput: () => {
        setInput("");
      },
    };
  });
  return (
    <>
      <label htmlFor="" className="form-label">
        {props.label}
      </label>
      <input
        className="form-control"
        {...props}
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </>
  );
};

export default forwardRef(InputText);

// forwardRef --->
