import React from 'react';
import { mount } from 'enzyme';

import { AuthContext } from '../../auth/AuthContext';
import DashboardRoutes from '../../routers/DashboardRoutes';
import { MemoryRouter } from 'react-router';

describe('Pruebas en el componente <DashboardRoutes />', () => {
    test('Debe de mostrarse correctamente', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                name: 'Omar',
                logged: true,
            }
        };
        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Omar');
    });

});