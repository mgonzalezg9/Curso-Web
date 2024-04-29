<script setup lang="ts">
import type { PokeVueRoute } from '@/router/route-list'

interface Props {
  title?: string
  routes: PokeVueRoute[]
  isSecondary?: boolean
}

defineProps<Props>()

const LOGO_SIZE = 75
</script>

<template>
  <header>
    <template v-if="!isSecondary">
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        :width="LOGO_SIZE"
        :height="LOGO_SIZE"
      />
      <span v-if="$props.title">{{ $props.title }}</span>
    </template>
    <nav>
      <RouterLink v-for="route in $props.routes" :key="route.name" :to="route.path">
        {{ route.title }}
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  place-items: center;
  line-height: 1.5;
  max-height: 100vh;

  nav {
    display: flex;
    justify-content: center;

    width: 100%;
    font-size: 12px;
    text-align: center;

    a {
      display: inline-block;
      padding: 0 1rem;
      border-left: 1px solid var(--color-border);

      &:first-of-type {
        border: 0;
      }

      &.router-link-active {
        color: var(--color-text);

        &:hover {
          background-color: transparent;
        }
      }
    }
  }
}

@media (min-width: 1024px) {
  header {
    nav {
      text-align: left;
      margin-left: -1rem;
      font-size: 1rem;

      padding: 1rem 0;
    }
  }
}
</style>
