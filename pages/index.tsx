import { Button } from '@nextui-org/react'
import type { NextPage } from 'next'
import { MainLayout } from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <>
      <MainLayout title='Listado de pokemons'>
        <Button color="gradient">
          Hola a todos
        </Button>
      </MainLayout>
    </>
  )
}

export default HomePage
