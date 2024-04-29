<script lang="ts" setup>
import { useRouter } from 'vue-router'
import PokemonCard from '../components/PokemonCard.vue'
import { usePokemons } from '../composables/usePokemons'
import type { Pokemon } from '../interfaces'

interface Props {
  list: Pokemon[]
}

defineProps<Props>()

const router = useRouter()
const { prefetchPokemon } = usePokemons()

const goTo = (pokemonId: number) => {
  router.push({
    name: 'pokemon-id',
    params: {
      id: pokemonId
    }
  })
}
</script>

<template>
  <div class="pokemon-list">
    <PokemonCard
      v-for="pokemon in list"
      :key="pokemon.id"
      :id="pokemon.id"
      :name="pokemon.name"
      :image="pokemon.frontSprite"
      @click="goTo(pokemon.id)"
      @mouseenter="prefetchPokemon(pokemon.id)"
    />
  </div>
</template>

<style lang="scss" scoped>
.pokemon-list {
  display: flex;
  flex-wrap: wrap;
  gap: 4em;
}
</style>
