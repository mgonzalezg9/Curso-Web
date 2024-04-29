import { useQuery, useQueryClient } from "@tanstack/vue-query"
import { storeToRefs } from "pinia"
import { computed, ref, watch } from "vue"
import { getPokemonById, getPokemons } from "../helpers/get-pokemons"
import { usePokemonStore } from "../store/pokemon.store"

const meetsFilter = (word: string, filter: string) => word.toLowerCase().startsWith(filter.toLowerCase());

export const usePokemons = ({ limit = 151 } = {}) => {
    const queryClient = useQueryClient()
    const store = usePokemonStore()
    const { pokemons } = storeToRefs(store)
    const nameFilter = ref('')

    const { data, isLoading, isError } = useQuery({
        queryKey: ['pokemons'],
        queryFn: () => getPokemons({ limit })
    })

    watch(data, (data) => {
        data && store.setPokemons(data)
    })

    const prefetchPokemon = (id: number) =>
        queryClient.prefetchQuery({
            queryKey: ['pokemon', id],
            queryFn: () => getPokemonById(id)
        })

    const setNameFilter = (name: string) => {
        nameFilter.value = name
    }

    return {
        pokemons: computed(() => pokemons.value.filter((pokemon) => meetsFilter(pokemon.name, nameFilter.value))),
        isLoading,
        isError,
        count: computed(() => pokemons.value?.length ?? 0),
        prefetchPokemon,
        setNameFilter
    }
}