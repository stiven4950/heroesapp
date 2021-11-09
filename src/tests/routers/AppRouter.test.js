import React from 'react';
import { mount } from "enzyme";

import { AuthContext } from '../../auth/AuthContext';
import AppRouter from '../../routers/AppRouter';

describe('Pruebas en <AppRouter/>', () => {

    test('Debe de mostrar el login si no está autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false,
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el componente Marvel si está autenticado', () => {
        const contextValue = {
            dispatch: jest.fn(),
            user: {
                name: 'Omar',
                logged: true,
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter/>
            </AuthContext.Provider>
        );

        expect(wrapper.find('.navbar').exists()).toBe(true);
    });

})
