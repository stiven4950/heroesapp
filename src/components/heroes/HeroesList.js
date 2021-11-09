import React, { useMemo } from 'react';
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher';
import HeroCard from './HeroCard';

const HeroesList = ({ publisher }) => {

    // Se memoriza el uso de la función y si publisher no cambia, no se hacen cambios
    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-md-3 g-2 animate__animated animate__fadeIn">
            {heroes.map(heroe => (
                <HeroCard
                    key={heroe.id}
                    {...heroe}
                />))}
        </div>
    );
}

export default HeroesList;