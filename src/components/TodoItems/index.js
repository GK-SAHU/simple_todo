import "./index.css";

const TodoItems = (props) => {
  const { todolist, deleteTodoItem } = props;
  const { title, id } = todolist;

  const onClickButton = () => {
    deleteTodoItem(id);
  };

  return (
    <li className="todo-class">
      <p className="title">{title}</p>
      <div className="btn-container">
        <button type="button" className="button" onClick={onClickButton}>
          Delete
        </button>
      </div>
    </li>
  );
};
export default TodoItems;
