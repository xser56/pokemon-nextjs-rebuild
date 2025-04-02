'use client'
import React, { useEffect, useState } from 'react';
import { grabPokemonAPI } from '@/app/Services/pokemonApi';
import { SearchOnly } from '@/app/Interfaces/pokeInterface';

const DisplayAbilities = ({ searchPokemon }: SearchOnly) => {
  const [abilities, setAbilities] = useState<string[]>([]);
  
  useEffect(() => {
    const fetchAbilities = async () => {
      const data = await grabPokemonAPI(searchPokemon);
  
      const abilityNames = data.abilities.map(
        (abilityObj: { ability: { name: string } }) => abilityObj.ability.name
      );
  
      setAbilities(abilityNames);
    };
  
    fetchAbilities();
  }, [searchPokemon]);

  return (
    <div className="bg-[#a8c1ea7f] rounded-2xl border p-4">
  <h1 className="text-3xl font-semibold text-center mb-4">Abilities</h1>

  <ul className="text-2xl flex justify-around gap-2 items-center">
    {abilities.length > 0 ? (
      abilities.map((ability, index) => (
        <li key={index} className="capitalize">
          {ability.replace('-', ' ')}
        </li>
      ))
    ) : (
      <li className="text-gray-500 italic">No abilities found.</li>
    )}
  </ul>
</div>
);
}

export default DisplayAbilities;
