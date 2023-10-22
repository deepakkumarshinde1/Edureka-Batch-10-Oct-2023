import { useTodoContext } from "../context/todo.context";

const Header = () => {
  let { todoList } = useTodoContext();
  return (
    <>
      <p className="text-center h3 text-primary">
        Todo Application
        <small className="badge text-bg-danger ms-2">{todoList.length}</small>
      </p>
    </>
  );
};

export default Header;
