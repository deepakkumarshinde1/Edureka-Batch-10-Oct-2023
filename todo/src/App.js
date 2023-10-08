// import (option)
import { useState } from "react";
// import "./App.css";
// component logic
function App() {
  // let [text, setText] = useState("Edureka");
  // let changeText = () => {
  //   setText("Welcome to edureka");
  // };
  let data = localStorage.getItem("todo");
  data = data === null ? [] : JSON.parse(data);
  let [inputValue, setInputValue] = useState(""); // string, number , {} , [] , boolean
  let [todoList, setTodoList] = useState(data);

  let inputChange = (event) => {
    let value = event.target.value;
    setInputValue(value);
  };
  let saveTodo = () => {
    let newTodo = {
      name: inputValue,
      isDone: false,
    };

    // update array state
    // #1 new copy array
    // es6 spread operator {} , [] ...
    let _todoList = [...todoList];

    // #2 push data in new copy
    _todoList.push(newTodo);

    localStorage.setItem("todo", JSON.stringify(_todoList));

    // #3 pass new array in set setTodoList
    setTodoList(_todoList);

    alert("Todo Saved");
    setInputValue("");
  };
  return (
    <>
      {/* <center>
        <button onClick={changeText}>Change Text</button>
        <h1>{text}</h1>
      </center> */}
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-6 col-11 m-auto">
            <p className="text-center h3 text-primary">
              Todo Application
              <small className="badge text-bg-danger ms-2">2</small>
            </p>
            <div className="input-group">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Enter ToDo"
                value={inputValue}
                onChange={inputChange}
              />
              <button
                onClick={saveTodo}
                className="input-group-text btn btn-success rounded-0"
              >
                Save
              </button>
            </div>
            <hr />
            <ul className="list-group">
              {todoList.map((todo, index) => {
                return (
                  <li
                    className="list-group-item d-flex justify-content-between"
                    key={index}
                  >
                    <div>
                      <input type="checkbox" />
                      <span className="ms-2">{todo.name}</span>
                    </div>
                    <button className="btn btn-sm btn-danger">DEL</button>
                  </li>
                );
              })}
              {/* <li className="list-group-item">
                <input type="checkbox" checked disabled />
                <span className="ms-2 fst-italic text-decoration-line-through">
                  An item
                </span>
              </li> */}
            </ul>
          </section>
        </section>
      </section>
    </>
  );
}

// export component
export default App;
