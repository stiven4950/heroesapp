import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
    const validPublishers = ['Marvel Comics', 'DC Comics'];

    if(!validPublishers.includes(publisher)){
        throw new Error(`Publisher "${publisher}" no es correcto`)
    }

    return heroes.filter(heroe=>heroe.publisher === publisher)
}
