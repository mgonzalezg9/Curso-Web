export interface Pokemon {
    id: number
    name: string
    frontSprite: string
}

export interface PokemonDetails extends Pokemon {
    height: number;
    weight: number;
}
