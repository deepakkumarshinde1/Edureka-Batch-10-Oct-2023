import React from "react"; // node_modules
import ReactDOM from "react-dom/client"; // node_modules
import "./index.css";
import App from "./App"; // custom_module
import reportWebVitals from "./reportWebVitals";
import { TodoContextProvider } from "./context/todo.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <TodoContextProvider>
      <App /> {/* running/call component */}
    </TodoContextProvider>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
