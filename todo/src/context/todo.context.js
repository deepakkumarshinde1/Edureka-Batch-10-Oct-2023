// create context

import {
  createContext,
  useCallback,
  useContext,
  useReducer,
  useState,
} from "react";
import { todoInitialState, todoReducer } from "./reducers/todo.reducer";

let TodoContext = createContext({});

// create contextProvider
export let TodoContextProvider = (props) => {
  let [state, dispatch] = useReducer(todoReducer, todoInitialState);

  let inputChange = (event) => {
    let value = event.target.value;
    value = value.trim();
    if (value === "") {
      dispatch({
        type: "SET_ERROR",
        payload: "please enter todo.",
      });
    } else {
      dispatch({
        type: "SET_ERROR",
        payload: "",
      });
    }

    dispatch({
      type: "INPUT_CHANGE",
      payload: value,
    });
  };
  let saveTodo = () => {
    if (state.inputValue.trim() === "") {
      return false;
    }
    let newTodo = {
      name: state.inputValue,
      isDone: false,
    };
    let _todoList = [...state.todoList];
    _todoList.push(newTodo);
    localStorage.setItem("todo", JSON.stringify(_todoList));
    dispatch({
      type: "SAVE_TODO_LIST",
      payload: _todoList,
    });
  };

  let values = {
    inputValue: state.inputValue,
    inputChange,
    saveTodo,
    todoList: state.todoList,
    error: state.error,
  };

  return (
    <TodoContext.Provider value={values}>{props.children}</TodoContext.Provider>
  );
};

// create a hook

export const useTodoContext = () => {
  return useContext(TodoContext);
};
