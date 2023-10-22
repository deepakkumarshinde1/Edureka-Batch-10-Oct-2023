import { useTodoContext } from "../context/todo.context";

const List = () => {
  let { todoList } = useTodoContext();
  return (
    <>
      {" "}
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
    </>
  );
};

export default List;
