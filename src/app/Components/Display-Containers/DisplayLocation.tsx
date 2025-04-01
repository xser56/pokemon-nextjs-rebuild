'use client';
import React, { useEffect, useState } from 'react';
import { grabPokemonLocationAPI } from '@/app/Services/pokemonApi';
import { Location } from '@/app/Interfaces/pokeInterface';

const DisplayLocation = ({ searchPokemon }) => {
  const [location, setLocation] = useState<Location>({
    pokeLocation: ""
  });

  useEffect(() => {
    const fetchLocation = async () => {
        const data = await grabPokemonLocationAPI(searchPokemon);
        console.log("Location: " + data);

        setLocation({
          pokeLocation: data
        });
      
    };

    if (searchPokemon) {
      fetchLocation();
    }
  }, [searchPokemon]);

  return (
    <div className="bg-[#a8c1ea7f] rounded-2xl border-1">
      <h1 className="flex justify-center text-3xl font-semibold pt-3">Location</h1>
      <h2 className="flex justify-center py-6 capitalize text-2xl text-center">
        {location.pokeLocation}
      </h2>
    </div>
  );
};

export default DisplayLocation;
