import type { RouteRecordRaw } from "vue-router";

const ROUTE_NAME = 'pokemons'

export const pokemonRoute: RouteRecordRaw = {
    path: `/${ROUTE_NAME}`,
    name: ROUTE_NAME,
    component: () => import('@/pokemon/layouts/PokemonLayout.vue'),
    redirect: `/${ROUTE_NAME}/list`,
    children: [
        {
            path: `/${ROUTE_NAME}/list`,
            name: 'pokemon-list',
            props: {
                title: 'Pokemon List',
                visible: true
            },
            component: () => import('@/pokemon/pages/PokemonList.vue')
        },
        {
            path: `/${ROUTE_NAME}/:id`,
            name: 'pokemon-id',
            props: {
                title: 'Pokemon By Id',
                visible: false
            },
            component: () => import('@/pokemon/pages/PokemonById.vue')
        },
        {
            path: `/${ROUTE_NAME}/search`,
            name: 'pokemon-search',
            props: {
                title: 'Pokemon Search',
                visible: true
            },
            component: () => import('@/pokemon/pages/PokemonSearch.vue')
        },
    ]
} as const