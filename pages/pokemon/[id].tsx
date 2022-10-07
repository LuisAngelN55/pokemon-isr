import { MainLayout } from "../../components/layouts"
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

interface Props {
  // pokemon: any;
  id: string;
  name: string;
}


const PokemonPage: NextPage<Props> = ({ id, name }) => {

  const router = useRouter();
  console.log(router.query);

  return (
    <MainLayout title="Algún Pokémon">
      <h1>{ id } - { name }</h1>
    </MainLayout> 
  )
};




export const getStaticPaths: GetStaticPaths = async (ctx) => {

  return {
    paths: [
      {
        params: {
          id: '1'
        }
      }
    ],
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  // const { data }= await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  return {
    props: {
      id: 1,
      name: 'Bulbasaur'
    }
  }
}


export default PokemonPage;