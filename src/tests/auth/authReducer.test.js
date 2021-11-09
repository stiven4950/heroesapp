import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer', () => {
    const initialState = {logged: false};

    test('Debe de retornar el estado por defecto', () => {
        const state = authReducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('Debe de autenticar y colocar el nombre del usuario', () => {
        const action = {
            type: types.login,
            payload: { name: 'Omar' }
        };
        const state = authReducer(initialState, action);
        expect(state).toEqual({
            name: 'Omar',
            logged: true
        });
    });

    test('Debe de borrar el name del usuario y logged en false', () => {
        const action = {
            type: types.logout
        };
        const state = authReducer({name:'Fernando', logged: true}, action);
        expect(state).toEqual({
            logged: false
        });
    });

})
