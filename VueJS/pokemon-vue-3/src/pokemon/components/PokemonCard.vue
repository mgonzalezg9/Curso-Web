<script lang="ts" setup>
interface Props {
  id: number
  name: string
  image: string
}

defineProps<Props>()

type Emits = {
  click: []
  mouseenter: []
}
defineEmits<Emits>()
</script>

<template>
  <div class="container" @click="$emit('click')" @mouseenter="$emit('mouseenter')">
    <img :src="$props.image" :alt="$props.name" />
    <span class="name">{{ $props.name }} #{{ $props.id }}</span>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;

  height: 12.5em;
  width: 10em;

  cursor: pointer;

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
  }

  &:hover {
    filter: grayscale(75%);

    border: solid 1px rgb(77, 77, 77);
  }
}
</style>
