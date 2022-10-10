import FavirtesPage from '../pages/favorites/index';

const toggleFavorite = ( id: number ): void => {

    let favorites: number[] = JSON.parse( localStorage.getItem('Favorites') || '[]' );

    if ( favorites.includes( id ) ) {
        favorites = favorites.filter( pokeId => pokeId !== id );
    } else {
        favorites.push( id );
    }

    localStorage.setItem('Favorites', JSON.stringify( favorites ));

}


const existInFavorites = ( id: number): boolean => {

    if( typeof window === 'undefined' ) return false;

    const favorites: number[] = JSON.parse( localStorage.getItem('Favorites') || '[]' );

    return favorites.includes( id );
}


const pokemons = (): number[] => {

    return JSON.parse( localStorage.getItem( 'Favorites' ) || '[]' );

}




export default {
    existInFavorites,
    toggleFavorite,
    pokemons,
}