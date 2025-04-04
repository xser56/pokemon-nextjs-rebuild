'use client'
import React, { useEffect, useState } from 'react';
import { grabPokemonAPI } from '@/app/Services/pokemonApi';
import { Moves, SearchOnly } from '@/app/Interfaces/pokeInterface';

const DisplayMoves = ({ searchPokemon }: SearchOnly) => {
  const [pokeMoves, setPokeMoves] = useState<Moves>({
    pokeMoves: []
  });

  useEffect(() => {
    const fetchMoves = async () => {
        const data = await grabPokemonAPI(searchPokemon);

        if (data.id > 649) {
          setPokeMoves({ pokeMoves: [""] });
          return;
        }


        const moveNames = data.moves.map((moveObj: { move: { name: string } }) => moveObj.move.name);
        setPokeMoves({ pokeMoves: moveNames });
    };

    fetchMoves();
  }, [searchPokemon]);

  // Split evenly
  const allMoves = pokeMoves.pokeMoves;
  const half = Math.ceil(allMoves.length / 2);
  const column1 = allMoves.slice(0, half);
  const column2 = allMoves.slice(half);

  return (
    <div className="bg-[#a8c1ea7f] rounded-2xl border p-2 flex flex-col overflow-hidden max-h-[615px] min-h-[615px]">
      <h1 className="flex justify-center text-2xl font-medium">Moves</h1>

      {/* Scrollable move list */}
      <div className="grid grid-cols-2 text-lg overflow-y-auto px-30 py-3 gap-4 ">
        <ul>
          {column1.map((move, i) => (
            <li key={i} className="capitalize">{move.replace('-', ' ')}</li>
          ))}
        </ul>
        <ul className="text-end">
          {column2.map((move, i) => (
            <li key={i} className="capitalize">{move.replace('-', ' ')}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayMoves;
