export interface PokeMain
{   
    pokeImage: string,
    pokeName: string,
    pokeIndex: number,
    pokeEvo: string[]
    pokeType: string[],
    pokeShiny: string

}
export interface Abilities
{
    pokeAbilities: string[]
}

export interface Moves
{
    pokeMoves: string[]
}

export interface Location
{
    pokeLocation: string;
}
export interface EvoSprite 
{
    name: string;
    image: string;
}

// Search Bar
export interface Search {
    searchPokemon: string;
    onSearch: (name: string) => void;
    favorites: string[];
    onRemoveFavorite: (name: string) => void;
    onRandom: () => void;
  }
export interface SearchOnly {
    searchPokemon: string;
  }

