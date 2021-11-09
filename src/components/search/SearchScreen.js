import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';

import { useForm } from '../../hooks/useForm';
import HeroCard from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

const SearchScreen = ({history}) => {

    // Para recibir de forma más sencilla los parámetros de los query string
    // se instala un paquete que hace eso por nosotros.
    // npm install query-string

    const { search } = useLocation();
    const { q = '' } = queryString.parse(search);

    
    const [{ description }, handleInputChange] = useForm({
        description: q,
    });
    
    // Se está disparando en cada instante se resuelve con useMemo
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();

        history.push(`?q=${description}`);
    }

    return (
        <>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <form onSubmit={handleSearch}>
                        <input
                            type="text"
                            name="description"
                            value={description}
                            className="form-control"
                            placeholder="Find your hero"
                            onChange={handleInputChange}
                            autoComplete="off"
                            required
                        />
                        <div className="d-grid gap-2">
                            <button
                                type="submit"
                                className="btn m-1 btn-outline-primary btn-block"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (q === '')
                        &&
                        <div className="alert alert-info">
                            Search a hero
                        </div>
                    }
                    {
                        (q !== '' && heroesFiltered.length === 0)
                        &&
                        <div className="alert alert-danger">
                            There is no a hero with <b>{q}</b>
                        </div>
                    }
                    {heroesFiltered.map(heroe =>
                        <HeroCard
                            key={heroe.id}
                            {...heroe}
                        />
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchScreen;