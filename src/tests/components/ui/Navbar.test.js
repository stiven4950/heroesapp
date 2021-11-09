import React from 'react';
import { mount } from 'enzyme';

import Navbar from '../../../components/ui/Navbar';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter, Router } from 'react-router';
import { types } from '../../../types/types';

describe('Pruebas en <NavBar />', () => {
    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(), // Los jest.fn() permiten generar un registro de las acciones realizadas en funciones
        location: {},
        listen: jest.fn(),
        createHref: jest.fn(),
    }
    const contextValue = {
        dispatch: jest.fn(),
        user: {
            name: 'Pedro',
            logged: true,
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro');
    });

    afterEach(()=>{
        jest.clearAllMocks();
    });

    test('Debe de llamar el logout y usar el history', () => {
        wrapper.find('button').simulate('click');

        expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
    });

});
