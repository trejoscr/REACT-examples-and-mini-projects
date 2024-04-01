export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li 
      className="list-group-item d-flex justify-content-between"
    >
      <span
        aria-label="span"
        onClick={() => onToggleTodo(todo.id)}
        className={`align-self-center btn btn-sm ${todo.done ? 'btn btn-success' : 'btn btn-warning'}`}>
          {todo.description}
        </span>
      <button
       aria-label="delete-btn"
        onClick={() => onDeleteTodo(todo.id)}
        className="btn btn-danger btn-sm">
          <i className="bi bi-trash-fill"></i>
      </button>
    </li>
  )
}
