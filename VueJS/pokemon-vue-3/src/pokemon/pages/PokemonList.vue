<script setup lang="ts">
import SearchBox from '@/shared/components/SearchBox.vue';
import PokemonCardList from '../components/PokemonCardList.vue';
import { usePokemons } from '../composables/usePokemons';

const { pokemons, isLoading, isError, count, setNameFilter } = usePokemons()
</script>

<template>
  <div>
    <div class="search-container">
      <h4>Pokemon List - ({{ count }})</h4>
      <SearchBox @search="setNameFilter" />
    </div>

    <span v-if="isLoading"> Loading... </span>
    <span v-else-if="isError"> An error ocurred fetching the Pokemon </span>
    <PokemonCardList v-else :list="pokemons ?? []" />
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  display: flex;
  gap: 2em;
}
</style>
