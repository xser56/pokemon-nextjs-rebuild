export interface PokeMain
{   
    pokeImage: string,
    pokeName: string,
    pokeIndex: number,
    pokeEvo: string[]
    pokeType: string[],
    pokeShiny: string

}
// pokeFavorite:
interface Favorite
{
    
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

export interface Search
{
    searchPokemon: string
}