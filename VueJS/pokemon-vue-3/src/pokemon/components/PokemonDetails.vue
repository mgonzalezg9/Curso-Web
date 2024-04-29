<script lang="ts" setup>
import type { PokemonDetails } from '../interfaces'

interface Props {
  details: PokemonDetails
}

defineProps<Props>()
</script>

<template>
  <div class="container">
    <img :src="$props.details.frontSprite" :alt="$props.details.name" />
    <span class="name">{{ $props.details.name }} #{{ $props.details.id }}</span>

    <div class="description">
      <div class="attribute">
        <span class="field">Height:</span>
        <span class="value">{{ $props.details.height }}</span>
      </div>
      <div class="attribute">
        <span class="field">Weight:</span>
        <span class="value">{{ $props.details.weight }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  height: 100%;
  width: 100%;
  max-width: 50em;
  margin: 0 auto;

  border-radius: 10%;
  padding: 1em;

  img {
    aspect-ratio: 1/1;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  .name {
    text-transform: capitalize;
    font-size: 34px;
  }

  .description {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    padding: 1em;
    width: 100%;

    .attribute {
      display: flex;
      align-items: center;
      gap: 0.5em;

      .field {
        font-weight: bold;
      }
    }
  }
}
</style>
