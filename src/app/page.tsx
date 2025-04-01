"use client"

import SearchBar from "./Components/SearchBar"
import DisplayAbilities from "./Components/Display-Containers/DisplayAbilities";
import DisplayPoke from "./Components/Display-Containers/DisplayPoke";
import DisplayMoves from "./Components/Display-Containers/DisplayMoves";
import DisplayLocation from "./Components/Display-Containers/DisplayLocation";
import { useState } from "react";

export default function Home() {
const [searchPokemon, setSearchPokemon] = useState(""); // default display

  return (
    <div className="max-h- bg-cover text-slate-900 text-2xl font-mono font-medium px-2" 
    style={{ backgroundImage: "url('/assets/pikachu.jpg')" }}>
      
      <header className="flex justify-center text-4xl sm:text-6xl md:justify-center font-mono font-light mb-4">
        Pokedex Gen 1-5
      </header>

      <SearchBar onSearch={setSearchPokemon}/>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen mt-2">

  {/* LEFT COLUMN */}
  <div className="flex flex-col overflow-hidden">
    {/* Abilities */}
    <div className="flex-none  mb-1">
      <DisplayAbilities searchPokemon={searchPokemon} />
    </div>
    {/* Moves*/}
    <div className="flex-grow overflow-hidden">
      <DisplayMoves searchPokemon={searchPokemon} />
    </div>
  </div>

  {/* RIGHT COLUMN */}
  <div className="h-100 ">
    <div className="">
      <DisplayPoke searchPokemon={searchPokemon} />
    </div>
    <div className="mt-1">
      <DisplayLocation searchPokemon={searchPokemon} />
    </div>
  </div>
</div>


    </div>
  );
}
