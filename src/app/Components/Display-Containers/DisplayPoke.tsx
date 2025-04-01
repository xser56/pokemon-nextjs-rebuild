"use client"
import { grabEvolutionChainAPI, grabPokemonAPI } from '@/app/Services/pokemonApi';
import React, { useEffect, useState } from 'react';
import { PokeMain } from '@/app/Interfaces/pokeInterface';

const DisplayPoke = ({ searchPokemon }) => {
  const [data, setData] = useState<PokeMain>({
    pokeImage: "",
    pokeShiny: "",
    pokeName: "",
    pokeIndex: 0,
    pokeEvo: [],
    pokeType: [],
  });
  const [isShiny, setIsShiny] = useState(false);

  useEffect(() => {
    const pokmonMainAPI = async () => {
      try {
        const apiData = await grabPokemonAPI(searchPokemon);
        const pokeName = apiData.name; 
        const apiEvo = await grabEvolutionChainAPI(pokeName);
        
        // Filter 
        const filteredEvos = apiEvo.filter(
          (evo) => evo.name.toLowerCase() !== pokeName.toLowerCase()
        );

        setData({
          pokeImage: apiData.sprites.other["official-artwork"].front_default,
          pokeShiny: apiData.sprites.other["official-artwork"].front_shiny,
          pokeName: apiData.name,
          pokeIndex: apiData.id,
          pokeEvo: filteredEvos,
          pokeType: apiData.types.map((typeObj: any) => typeObj.type.name)
        });
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
        setData({
          pokeImage: "/assets/pokeball.png",
          pokeName: "Not found",
          pokeIndex: 0,
          pokeEvo: [],
          pokeType: [],
          pokeShiny: ""

        });
      }
    };

    
    pokmonMainAPI();
  }, [searchPokemon]);

  return (
    <div>
      <div className="row-span-2 bg-[#a8c1ea7f] rounded-2xl border-1">
        {/* Buttons */}
        <div className="flex justify-between">
          <div className="flex items-center">
            <img
              src="./assets/pokeball.png"
              className="cursor-pointer w-20 h-20 hover:scale-110 transition-all duration-200"
              alt="Favorite Pokemon"
            />
            <img
              src="./assets/sparkle.png"
              className="mt-5 h-10 w-10 cursor-pointer hover:scale-110 transition-all duration-200"
              alt="shinyIcon"
              onClick={() => setIsShiny(!isShiny)}
            />
          </div>
          <h2 id="pokeIndexNum" className="px-5 py-5 text-3xl">[{data.pokeIndex}]</h2>
        </div>

        {/* Pokemon Name and Image */}
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
          {data.pokeEvo.map((evo, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img
                src={`https://img.pokemondb.net/artwork/large/${evo.name}.jpg`}
                className="w-40 h-40"
                alt={evo}
              />
              <h2 className="mt-2 text-lg capitalize">{evo.name}</h2>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayPoke;
