import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas al <TodoItem/>', () => {

  const todo = {
    id: 1,
    description: 'Piedra del Alma',
    done: false
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(()=>jest.clearAllMocks());

  test('Debe de mostrar el TODO pendiente de completar', () => {

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');

  });

  test('Debe de mostrar el TODO completado', () => {

    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('btn btn-success');

  });

  test('El span debe de llamar el toggle TODO cuando se hace onclick', () => {

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');

    fireEvent.click(spanElement);
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

  });

  test('El boton debe de llamar el delete TODO', () => {

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const deleteButton = screen.getByLabelText('delete-btn');

    fireEvent.click(deleteButton);
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

  });

});