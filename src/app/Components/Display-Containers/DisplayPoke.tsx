"use client";
import { grabEvolutionChainAPI, grabPokemonAPI } from "@/app/Services/pokemonApi";
import React, { useEffect, useState } from "react";
import { PokeMain, EvoSprite, Search } from "@/app/Interfaces/pokeInterface";


interface DisplayPokeProps {
  searchPokemon: string;
  onAddFavorite: (pokeName: string) => void;
}

const DisplayPoke: React.FC<DisplayPokeProps> = ({ searchPokemon, onAddFavorite }) => {
  const [data, setData] = useState<PokeMain>({
    pokeImage: "",
    pokeShiny: "",
    pokeName: "",
    pokeIndex: 0,
    pokeEvo: [],
    pokeType: [],
  });
  const [isShiny, setIsShiny] = useState(false);
  const [evolutions, setEvolutions] = useState<EvoSprite[]>([]);

  useEffect(() => {
    const pokmonMainAPI = async () => {
        const apiData = await grabPokemonAPI(searchPokemon);
        const pokeName = apiData.name;
        const apiEvo = await grabEvolutionChainAPI(pokeName);

        // Filter out current Pokémon
        const evoChainFiltered = apiEvo.filter(
          (name: string) => typeof name === "string" && name.toLowerCase() !== pokeName.toLowerCase()
        );
        
        // Evolution
        const evoResults: EvoSprite[] = [];
        if (evoChainFiltered.length > 0) {
          const poke1 = await grabPokemonAPI(evoChainFiltered[0]);
          evoResults.push({
            name: evoChainFiltered[0],
            image: poke1.sprites.other["official-artwork"].front_default,
          });
        }
        if (evoChainFiltered.length > 1) {
          const poke2 = await grabPokemonAPI(evoChainFiltered[1]);
          evoResults.push({
            name: evoChainFiltered[1],
            image: poke2.sprites.other["official-artwork"].front_default,
          });
        }

        setData({
          pokeImage: apiData.sprites.other["official-artwork"].front_default,
          pokeShiny: apiData.sprites.other["official-artwork"].front_shiny,
          pokeName: apiData.name,
          pokeIndex: apiData.id,
          pokeEvo: evoChainFiltered,
          pokeType: apiData.types.map((typeObj: any) => typeObj.type.name),
        });

        setEvolutions(evoResults);    
    };

    if (searchPokemon) {
      pokmonMainAPI();
    }
  }, [searchPokemon]);

  return (
    <div>
      <div className="row-span-2 bg-[#a8c1ea7f] rounded-2xl border-1">
        {/* Top Buttons */}
        <div className="flex justify-between">
          <div className="flex items-center">
          <img
            src="./assets/pokeball.png"
            className="cursor-pointer w-20 h-20 hover:scale-110 transition-all duration-200"
            alt="Favorite Pokemon"
            onClick={() => onAddFavorite(data.pokeName)}
          />
            <img
              src="./assets/sparkle.png"
              className="mt-5 h-10 w-10 cursor-pointer hover:scale-110 transition-all duration-200"
              alt="shinyIcon"
              onClick={() => setIsShiny(!isShiny)}
            />
          </div>
          <h2 className="px-5 py-5 text-3xl">[{data.pokeIndex}]</h2>
        </div>

        {/* Image + Name */}
        <div className="relative flex flex-col items-center justify-center text-center">
          {data.pokeImage && (
            <img
              src={isShiny ? data.pokeShiny : data.pokeImage}
              className="w-40 h-40 transition-all duration-300"
              alt={`${data.pokeName} image`}
            />
          )}
          <h1 className="flex justify-center text-5xl capitalize">{data.pokeName}</h1>
        </div>

        {/* Types */}
        <ul className="text-3xl font-sans flex justify-center pb-10 pt-1 gap-4">
          {data.pokeType.map((type, index) => (
            <li key={index} className="capitalize px-3 py-1 rounded-lg">
              {type}
            </li>
          ))}
        </ul>

        {/* Evolution Chain */}
        <div className="flex justify-around">
          {evolutions.length === 0 ? (
            <p className="italic text-center w-full text-gray-700 text-3xl pb-5">N/A</p>
          ) : (
            evolutions.map((evo, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img
                  src={evo.image}
                  className="w-40 h-40"
                  alt={evo.name}
                  onError={(e) => ((e.target as HTMLImageElement).src = "/assets/pokeball.png")}
                />
                <h2 className="mt-2 text-lg capitalize">{evo.name}</h2>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayPoke;
