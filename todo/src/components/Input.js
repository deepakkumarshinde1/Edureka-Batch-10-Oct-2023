import { useTodoContext } from "../context/todo.context";

const Input = (props) => {
  let { inputValue, inputChange, saveTodo, error } = useTodoContext();
  return (
    <>
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
      <div>
        <small className="text-danger">{error}</small>
      </div>
    </>
  );
};

export default Input;
