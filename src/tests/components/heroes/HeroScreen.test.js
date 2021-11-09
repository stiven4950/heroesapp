import React from 'react'
import {mount} from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import HeroesScreen from '../../../components/heroes/HeroesScreen';

describe('Pruebas en el componente <HeroScreen />', () => {
        
    test('Debe de mostrar el componente Redirect si no hay argumentos en el URL', () => {
        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroesScreen history={history}/>
            </MemoryRouter>
        );
        expect(wrapper.find('Redirect').exists()).toBe(true);
    });

    test('Debe de mostrar mostrar un héroe si el parámetro existe y se encuentra', () => {
        // Para que el path logre reconocer los parámetros de la ruta, se debe
        // crear un componente de tipo Route donde se especifique el formato de esta
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={HeroesScreen} />                
            </MemoryRouter>
        );
        expect(wrapper.find('.row').exists()).toBe(true);
    });

    test('Debe de regresar a la pantalla anterior con PUSH', () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={()=><HeroesScreen history={history}/>} />                
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        expect(history.push).toHaveBeenCalledWith('/');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test('Debe de regresar a la pantalla anterior GOBACK', () => {
        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroeId" component={()=><HeroesScreen history={history}/>} />                
            </MemoryRouter>
        );
        wrapper.find('button').simulate('click');
        expect(history.push).not.toHaveBeenCalled();
        expect(history.goBack).toHaveBeenCalledTimes(1);
    });

    test('Debe de llamar el Redirect si el hero no existe', () => {
        const history = {
            length: 10,
            push: jest.fn(),
            goBack: jest.fn(),
        };
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider2323255121']}>
                <Route path="/hero/:heroeId" component={()=><HeroesScreen history={history}/>} />                
            </MemoryRouter>
        );
        expect(wrapper.text()).toBe('');
    });
    
});
