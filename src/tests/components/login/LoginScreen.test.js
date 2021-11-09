import React from 'react';
import { mount } from 'enzyme';
import { AuthContext } from '../../../auth/AuthContext';
import { MemoryRouter } from 'react-router';
import LoginScreen from '../../../components/login/LoginScreen';
import { types } from '../../../types/types';

describe('Pruebas en el componente <LoginScreen />', () => {
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn(),
        replace: jest.fn(),
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false,
        }
    };
    const wrapper = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <LoginScreen history={history}/>
            </MemoryRouter>
        </AuthContext.Provider>
    );
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de realizar el dispatch y la navegación', () => {
        wrapper.find('button').simulate('click');
        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload: {
                name: 'Omar'
            }
        });

        expect(history.replace).toHaveBeenCalledWith('/');

        localStorage.setItem('lastPath', '/dc');
        wrapper.find('button').simulate('click');
        expect(history.replace).toHaveBeenCalledWith('/dc');
    });


});
