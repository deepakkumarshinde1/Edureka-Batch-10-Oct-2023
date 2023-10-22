let data = localStorage.getItem("todo");
data = data === null ? [] : JSON.parse(data);
export let todoInitialState = {
  inputValue: "",
  todoList: data,
  error: "",
};
export let todoReducer = (state, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INPUT_CHANGE":
      let _state = { ...state, inputValue: payload };
      return _state;

    case "SAVE_TODO_LIST":
      let _saveListState = { ...state, todoList: payload, inputValue: "" };
      return _saveListState;

    case "SET_ERROR":
      let _errorState = { ...state, error: payload };
      return _errorState;

    default:
      return state;
  }
};
