import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';
import confetti from 'canvas-confetti';

import { getPokemonInfo, localFavorites } from "../../utils";
import { MainLayout } from "../../components/layouts"
import { pokeApi } from "../../api";
import { Pokemon } from "../../interfaces";
import { useState } from "react";


interface Props {
  pokemon: Pokemon
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  //   SABER RUTA ACTUAL (URL)
  // const router = useRouter();
  // console.log(router.query);

  const [isInFavorites, setIsInFavorites] = useState( localFavorites.existInFavorites( pokemon.id ));

  const onToggleFavorite = () => {
    localFavorites.toggleFavorite( pokemon.id );
    setIsInFavorites( !isInFavorites );

    if( isInFavorites ) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })

  }

  // console.log para determinar si esta corriendo del lado del server o solo el front
  // console.log({ existeWindow: typeof window })


  return (
    <MainLayout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: '5px'}} gap={ 2 } >
        <Grid xs={ 12 } sm={ 4 } >
          <Card isHoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image
                src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                alt={ pokemon.name }
                width="100%"
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent:'space-between'}}>
              <Text h1 transform="capitalize">{ pokemon.name }</Text>
              
              <Button
                color="gradient"
                ghost={ !isInFavorites }
                onPress={ onToggleFavorite }
              >
                { isInFavorites? 'En favoritos' : 'Guardar en favoritos'}
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={ 30 }>Sprites:</Text>
              <Container direction="row" display="flex" gap={0}>
                <Image
                  src={ pokemon.sprites.front_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                
                <Image
                  src={ pokemon.sprites.back_default }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                <Image
                  src={ pokemon.sprites.front_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />
                <Image
                  src={ pokemon.sprites.back_shiny }
                  alt={ pokemon.name }
                  width={ 100 }
                  height= { 100 }
                />

              </Container>
            </Card.Body>
          </Card>
        </Grid>

      </Grid.Container>
      
    </MainLayout> 
  )
};




export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemon151 = [...Array(151)].map( ( value, index ) => `${ index + 1 }`);

  return {
    paths: pokemon151.map( id => ({
      params: { id }
    })),
    // fallback: false
    fallback: 'blocking'
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { id } = ctx.params as { id: string };

  const pokemon = await getPokemonInfo( id );

  if( !pokemon ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    }
  }
}


export default PokemonPage;