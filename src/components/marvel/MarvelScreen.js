import React from 'react';

import HeroesList from '../heroes/HeroesList';

const MarvelScreen = () => {
    return (
        <>
            <h1>Marvel Screen</h1>
            <hr/>
            <HeroesList publisher="Marvel Comics" />
        </>
    );
}

export default MarvelScreen;