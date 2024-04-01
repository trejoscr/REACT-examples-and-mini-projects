import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis"

export const TodoApp = () => {

  // const {data: todos = [], isLoading} = useGetTodosQuery();

  const [todoID, setTodoID] = useState(1);
  const {data: todo, isLoading} = useGetTodoQuery(todoID);

  const nextTodo = () => {
    setTodoID(todoID+1);
  };
  
  const prevTodo = () => {
    if (todoID===1) return;
    setTodoID(todoID-1);
  };
  

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr/>

      <h4>IsLoading {isLoading ? 'True' : 'False'}</h4>

      <pre>
        {JSON.stringify(todo)}
      </pre>

      <button onClick={prevTodo}>
        Prev Page
      </button>
      -
      <button onClick={nextTodo}>
        Next Page
      </button>

      {/* <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            * <strong>{todo.completed ? 'DONE' : 'Pending'}</strong> - {todo.title}
          </li>
        ))}
      </ul> */}
    </>
  )
}
