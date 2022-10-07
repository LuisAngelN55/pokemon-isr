import { MainLayout } from "../../components/layouts"
import { useRouter } from 'next/router';

interface Props {
  pokemon: any;
}


const PokemonPage = () => {

  const router = useRouter();
  console.log(router.query);

  return (
    <MainLayout title="Algún Pokémon">
      <h1>Hola prrs</h1>
    </MainLayout> 
  )
};

export default PokemonPage;