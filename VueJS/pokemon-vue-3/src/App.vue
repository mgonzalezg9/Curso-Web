<script setup lang="ts">
import PokeNavbar from '@/shared/components/PokeNavbar.vue'
import { RouterView } from 'vue-router'
import { POKEVUE_ROUTES } from './router/route-list'
</script>

<template>
  <PokeNavbar title="Pokemon Vue 3" :routes="POKEVUE_ROUTES" />

  <main>
    <RouterView />
  </main>
</template>
