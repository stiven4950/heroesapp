import React, { useMemo } from 'react';
import { Redirect, useParams } from 'react-router';

import { getHeroesById } from '../../selectors/getHeroeById';
import { heroImage } from '../../helpers/heroImages';


const HeroesScreen = ({ history }) => {
    // Para obtener los params se usa un custom hook de react-router-dom

    const { heroeId } = useParams();
    const hero = useMemo(() => getHeroesById(heroeId), [heroeId]);

    if (!hero) return <Redirect to="/" />;

    const handleReturn = () => {
        history.length <= 2
            ?
            history.push('/')
            :
            history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;

    return (
        <div className="row mt-5">
            <div className="col-3">
                <img
                    src={heroImage(`./${heroeId}.jpg`)}
                    className="img-thumbnail animate__animated animate__fadeInLeft"
                    alt={superhero}
                />
            </div>
            <div className="col-9">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b>Alter Ego</b>: {alter_ego}</li>
                    <li className="list-group-item"> <b>Publisher</b>: {publisher}</li>
                    <li className="list-group-item"> <b>First Appearance</b>: {first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>
                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >Return</button>
            </div>
        </div>
    );
}

export default HeroesScreen;