const { render, screen } = require("@testing-library/react");
const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const { useTodos } = require("../../src/hooks/useTodos");

jest.mock('../../src/hooks/useTodos');

describe('Pruebas en <TodoApp/>', () => {

  useTodos.mockReturnValue({
    todos: [
      {
        id: 1,
        description: 'Piedra del Alma',
        done: false
      },
      {
        id: 2,
        description: 'Piedra del Poder',
        done: false
      }
    ],
    todosCount:2,
    pendingTodosCount:1,
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn()
  });

  test('Debe de mostrar el componente correctamente', () => {
    render(<TodoApp/>)
    
    expect(screen.getByText('Piedra del Alma')).toBeTruthy();
    expect(screen.getByText('Piedra del Poder')).toBeTruthy();

    expect(screen.getByRole('textbox')).toBeTruthy();

  });

})