<script lang="ts" setup>
import { ref } from 'vue'
import SearchIcon from './icons/SearchIcon.vue'

interface Props {
  name?: string
  id?: string
}

defineProps<Props>()

interface Emits {
  (e: 'search', text: string): void
}
defineEmits<Emits>()

const searchText = ref<string>('')
</script>

<template>
  <div class="search-box-container">
    <input
      type="search"
      v-model="searchText"
      :name="$props.name"
      :id="$props.id"
      @change="$emit('search', searchText)"
    />
    <button type="button" :disabled="!searchText" @click="$emit('search', searchText)">
      <SearchIcon />
    </button>
  </div>
</template>

<style lang="scss" scoped>
$buttonWidth: 3em;

.search-box-container {
  display: flex;
  gap: 0.5em;

  input[type='search'] {
    border-radius: 5%;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 3%;
    background-color: aliceblue;
    border-radius: 25%;

    width: $buttonWidth;
    height: $buttonWidth;
  }
}
</style>
