import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../src/auth";
import { PrivateRoute } from "../../src/router/PrivateRoute";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe('Pruebas en PrivateRoute', () => {

  test('Debe de mostrar el children si esta autentiticado', () => {

    Storage.prototype.setItem =  jest.fn();

    const contextValue = {
      logged: true,
      user: {
        name: 'andres',
        id: 'ABC123'
      }      
    }

    render(
      <AuthContext.Provider value={contextValue}>

        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            {/* mostrar cualquier childer */}
            <h1>Ruta privada</h1>
          </PrivateRoute>
        </MemoryRouter>

      </AuthContext.Provider>
    );

    expect(screen.getByText('Ruta privada')).toBeTruthy();
    expect(localStorage.setItem).toHaveBeenCalledWith( "lastPath", "/marvel");

  });

});