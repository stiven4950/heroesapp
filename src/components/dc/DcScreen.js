import React from 'react';

import HeroesList from '../heroes/HeroesList';

const DcScreen = () => {
    return (
        <>
            <h1>DC Screen</h1>
            <hr/>
            <HeroesList publisher="DC Comics" />
        </>
    );
}

export default DcScreen;