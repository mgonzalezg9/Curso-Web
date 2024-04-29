import { useQuery } from "@tanstack/vue-query"
import { computed, watch } from "vue"
import { getPokemonById } from "../helpers/get-pokemons"
import { usePokemonStore } from "../store/pokemon.store"

export const usePokemon = (id: number) => {
    const store = usePokemonStore()

    const { data, isLoading, isError } = useQuery({
        queryKey: ['pokemon', id],
        queryFn: () => getPokemonById(id)
    })

    watch(data, (data) => {
        data && store.setPokemonDetails(id, data)
    }, { immediate: true })

    return {
        pokemon: computed(() => store.pokemonDetails[id]),
        isLoading,
        isError,
    }
}