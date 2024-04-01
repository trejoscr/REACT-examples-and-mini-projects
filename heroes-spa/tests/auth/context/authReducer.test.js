import { authReducer } from "../../../src/auth/context/AuthReducer";
import { types } from "../../../src/auth/types/types";

describe('Prubas en authReducer', () => {

  test('debe de retornar el estado por defecto', () => {
    const state = authReducer({logged:false}, {});
    expect(state).toEqual({logged:false});
  });

  test('debe de (login) llamar el login autenticar y establecer el user', () => {
    const initialState = {logged:false};
    const action = {
      type: types.login,
      payload: {
        id: '123',
        name: 'exampleuser',
      },
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({
      logged: true,
      user: {
        id: '123',
        name: 'exampleuser',
      },
    });
  });

  test('debe de (logout borrar el name del usuario y logged en false)', () => {
    const initialState = {
      logged: true,
      user: {
        id: '123',
        name: 'exampleuser',
      },
    };
    const action = {
      type: types.logout,
    };
    const state = authReducer(initialState, action);
    expect(state).toEqual({
      logged: false,
    });
  });

});