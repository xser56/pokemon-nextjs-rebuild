"use client";

import { useEffect, useState } from "react";
import SearchBar from "./Components/SearchBar";
import DisplayAbilities from "./Components/Display-Containers/DisplayAbilities";
import DisplayPoke from "./Components/Display-Containers/DisplayPoke";
import DisplayMoves from "./Components/Display-Containers/DisplayMoves";
import DisplayLocation from "./Components/Display-Containers/DisplayLocation";



export default function Home() {
  const [searchPokemon, setSearchPokemon] = useState("");
  const [favorites, setFavorites] = useState<string[]>([]);

  // Favorites and Randomize
  const handleAddFavorite = (pokeName: string) => {
    if (!favorites.includes(pokeName)) {
      setFavorites((prev) => [...prev, pokeName]);
    }
  };

  const handleRemoveFavorite = (pokeName: string) => {
    setFavorites((prev) => prev.filter((name) => name !== pokeName));
  };

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 649) + 1; // Pokédex IDs 1–649
    setSearchPokemon(String(randomId));
  };

  useEffect(() => {
    const stored = localStorage.getItem("pokemonFavorites");
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Local Storage Favorites
  useEffect(() => {
    localStorage.setItem("pokemonFavorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className=" bg-cover bg-center md:bg-top bg-no-repeat text-slate-900 text-2xl font-mono font-medium px-2" 
    style={{ backgroundImage: "url('/assets/pikachu.jpg')" }}
    >
      <header className="flex justify-center text-4xl sm:text-6xl md:justify-center font-mono font-light mb-4">
        Pokedex Gen 1-5
      </header>

      <SearchBar
        searchPokemon={searchPokemon}
        onSearch={setSearchPokemon}
        favorites={favorites}
        onRemoveFavorite={handleRemoveFavorite}
        onRandom={handleRandom}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-screen mt-2">
        {/* LEFT */}
        <div className="flex flex-col overflow-hidden">
          <div className="flex-none mb-1">
            <DisplayAbilities searchPokemon={searchPokemon} />
          </div>
          <div className="flex-grow overflow-hidden ">
            <DisplayMoves searchPokemon={searchPokemon} />
          </div>
        </div>

        {/* RIGHT */}
        <div className="h-100">
          <div>
            <DisplayPoke
              searchPokemon={searchPokemon}
              onAddFavorite={handleAddFavorite}
            />
          </div>
          <div className="mt-1">
            <DisplayLocation searchPokemon={searchPokemon} />
          </div>
        </div>
      </div>
    </div>
  );
}
