<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PokemonDetails from '../components/PokemonDetails.vue'
import { usePokemon } from '../composables/usePokemon'

const route = useRoute()
const router = useRouter()

const id = computed(() => Number(route.params.id))

watchEffect(() => {
  if (!id.value || isNaN(id.value)) {
    console.error(`Invalid Pokemon ID ${id.value}`)
    router.back()
  }
})

const { pokemon, isLoading, isError } = usePokemon(id.value)
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">Error!</div>
  <PokemonDetails v-else-if="pokemon" :details="pokemon" />
</template>
