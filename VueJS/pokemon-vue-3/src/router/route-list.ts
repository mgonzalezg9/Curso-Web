export interface PokeVueRoute {
  path: string
  name: string
  title: string
}

export const POKEVUE_ROUTES: PokeVueRoute[] = [
  {
    path: '/',
    name: 'home',
    title: 'Home',
  },
  {
    path: '/about',
    name: 'about',
    title: 'About',
  },
  {
    path: '/pokemons',
    name: 'pokemones',
    title: 'Pokemones',
  },
]

