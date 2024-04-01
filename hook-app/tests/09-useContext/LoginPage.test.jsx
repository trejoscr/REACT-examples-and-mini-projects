import { render, screen, fireEvent } from "@testing-library/react";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { UserContext } from "../../src/09-useContext/context/UserContext";

describe('Pruebas en el <LoginPage/>', () => {

  test('Debe de mostrar el componente sin el usuario', () => {

    render(
      <UserContext.Provider value={{user:null}}>
        <LoginPage/>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
    
  });

  test('Debe de llamar el setUser cuando se hace click en el boton', () => {

    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );

    const setUserButton = screen.getByText("Set User");
    fireEvent.click(setUserButton);

    expect(setUserMock).toHaveBeenCalledTimes(1);
    expect(setUserMock).toHaveBeenCalledWith({
      id: 123,
      name: 'andres',
      email: 'amtre93@gmail.com'
    });

  });

})