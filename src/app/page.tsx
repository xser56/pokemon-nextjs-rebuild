// import { useEffect, useState } from "react";
import {grabPokemonAPI, grabPokemonLocationAPI, grabEvolutionChainAPI} from "./Services/pokemonApi"
import SearchBar from "./Components/SearchBar"
import DisplayAbilities from "./Components/Display-Containers/DisplayAbilities";
import DisplayPoke from "./Components/Display-Containers/DisplayPoke";
import DisplayMoves from "./Components/Display-Containers/DisplayMoves";
import DisplayLocation from "./Components/Display-Containers/DisplayLocation";

export default function Home() {

// const [pokemonImage,setPokemonImage] = useState("")

  return (
    <div className="min-h-screen bg-cover bg-center text-black text-2xl " 
    style={{ backgroundImage: "url('/assets/pikachu.jpg')" }}>
      
      <header className="flex justify-center text-5xl sm:text-6xl md:justify-center text-black font-serif ">
        Pokedex Gen [1-5]
      </header>

      <SearchBar/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <DisplayAbilities/>
      <DisplayPoke/>
      <DisplayMoves/>
      <DisplayLocation/>
    </div>

    </div>
  );
}
