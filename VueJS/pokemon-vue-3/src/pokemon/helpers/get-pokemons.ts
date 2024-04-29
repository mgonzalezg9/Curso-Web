import axios from "axios"
import pokemonApi from "../api"
import type { Pokemon, PokemonDetailResponse, PokemonDetails, PokemonListResponse } from "../interfaces"

export const getPokemons = async ({ limit = 151 } = {}): Promise<Pokemon[]> => {
    const { data: { results } } = await pokemonApi.get<PokemonListResponse>(`pokemon?limit=${limit}`)

    const promises = []
    for (const { url } of results) {
        promises.push(axios.get<PokemonDetailResponse>(url))
    }

    const pokemonDetails = await Promise.all(promises)
    return pokemonDetails.map(({ data }) => ({
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.other.dream_world.front_default,
    }))
}

export const getPokemonById = (id: number): Promise<PokemonDetails> => {
    return pokemonApi.get<PokemonDetailResponse>(`pokemon/${id}`).then(({ data }) => ({
        id: data.id,
        name: data.name,
        frontSprite: data.sprites.other.dream_world.front_default,
        height: data.height,
        weight: data.weight,
        baseExperience: data.base_experience,
        encounters: data.location_area_encounters,
    }))
}