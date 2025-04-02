'use client';
import React, { useEffect, useState } from 'react';
import { grabPokemonAPI, grabPokemonLocationAPI } from '@/app/Services/pokemonApi';
import { Location, SearchOnly } from '@/app/Interfaces/pokeInterface';

const DisplayLocation = ({ searchPokemon }: SearchOnly) => {
  const [location, setLocation] = useState<Location>({
    pokeLocation: "",
  });

  useEffect(() => {
    const fetchLocation = async () => {
        // 
        const pokeData = await grabPokemonAPI(searchPokemon);

        if (pokeData.id > 649) {
          setLocation({ pokeLocation: "" });
          return;
        }

        // Fetch the location
        const locationData = await grabPokemonLocationAPI(searchPokemon);
        setLocation({ pokeLocation: locationData });
        setLocation({ pokeLocation: "Location not found" });
    };

    if (searchPokemon) {
      fetchLocation();
    }
  }, [searchPokemon]);

  return (
    <div className="bg-[#a8c1ea7f] rounded-2xl border-1 ">
      <h1 className="flex justify-center text-2xl font-semibold pt-3">Location</h1>
      <h2 className="flex justify-center py-6 capitalize text-2xl text-center">
        {location.pokeLocation}
      </h2>
    </div>
  );
};

export default DisplayLocation;
