import { useState, useEffect } from 'react';
import { MainLayout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';
import { localFavorites } from '../../utils';

const FavirtesPage = () => {

  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    
    setFavoritePokemons( localFavorites.pokemons );

  }, [])

  return (
    <MainLayout title='Pokémons - Favoritos'>
      
      {
        favoritePokemons.length === 0
          ? ( <NoFavorites /> )
          : ( <FavoritePokemons pokemons={ favoritePokemons } /> )
      }


          
    </MainLayout>
  )
}

export default FavirtesPage;