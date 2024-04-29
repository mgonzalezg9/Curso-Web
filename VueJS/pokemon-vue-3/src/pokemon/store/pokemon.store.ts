import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import type { Pokemon, PokemonDetails } from "../interfaces";

export const usePokemonStore = defineStore('Pokemon', () => {
    const pokemons = ref<Pokemon[]>([]);
    const pokemonDetails = reactive<Record<number, PokemonDetails>>({});

    const setPokemons = (newPokemons: Pokemon[]) => {
        pokemons.value = newPokemons;
    }

    const setPokemonDetails = (id: number, details: PokemonDetails) => {
        pokemonDetails[id] = details;
    }

    return {
        pokemons,
        pokemonDetails,
        setPokemons,
        setPokemonDetails,
    }
})