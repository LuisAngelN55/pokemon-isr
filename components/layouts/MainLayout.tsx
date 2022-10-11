import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';
import { useRouter } from 'next/router';

interface Props {
    children: React.ReactNode;
    title?: string;
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const MainLayout: FC<Props> = ({ children, title }) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name='author' content='Luis Angel Naranjo' />
            <meta name='description' content= {`Información sobre el pokémon ${ title }`} />
            <meta name='keywords' content={ `${title}, pokemon, pokedex`} />

            <meta property="og:title" content={`Información sobre el Pokémon ${ title }`} />
            <meta property="og:description" content={`Esta es la página sobre ${ title }`} />
            <meta property="og:image" content={`${ origin }/imgs/banner.png`} />
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }

        </main>
    </>
  )
}