import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import DcScreen from '../components/dc/DcScreen';
import HeroesScreen from '../components/heroes/HeroesScreen';
import MarvelScreen from '../components/marvel/MarvelScreen';
import SearchScreen from '../components/search/SearchScreen';
import Navbar from '../components/ui/Navbar';

const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className='container mt-5'>
                <Switch>
                    <Route exact path='/marvel' component={MarvelScreen} />
                    <Route exact path='/heroe/:heroeId' component={HeroesScreen} />
                    <Route exact path='/dc' component={DcScreen} />
                    <Route exact path='/search' component={SearchScreen} />

                    {/* Si alguna de las rutas no se encuentra se hace el redireccionamiento */}
                    <Redirect to='/marvel' />
                </Switch>
            </div>
        </>
    );
}

export default DashboardRoutes;