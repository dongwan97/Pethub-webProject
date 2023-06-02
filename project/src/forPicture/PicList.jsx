import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ favs, onRemove }) => {
  return (
    <div className="TodoList">
      {favs.map((fav) => (
        <TodoListItem todo={fav} key={fav.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoList;
