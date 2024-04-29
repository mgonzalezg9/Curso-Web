<script setup lang="ts">
import type { PokeVueRoute } from '@/router/route-list'
import PokeNavbar from '@/shared/components/PokeNavbar.vue'
import { pokemonRoute } from '../router'

interface RouteProps {
  title: string
  visible: boolean
}

const pokeRoutes: PokeVueRoute[] =
  pokemonRoute.children
    ?.filter((r) => (r.props as RouteProps).visible)
    .map((r) => ({
      path: r.path,
      name: r.name?.toString() ?? '',
      title: (r.props as RouteProps).title
    })) || []
</script>

<template>
  <div>
    <h1>Pokemon Layout</h1>
    <PokeNavbar :routes="pokeRoutes" isSecondary />

    <RouterView class="pokemon-view" />
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.pokemon-view {
  padding: 1em;
}
</style>
