"use client";
import React, { useState } from "react";
import { Search } from "@/app/Interfaces/pokeInterface";

const SearchBar = ({
  onSearch,
  favorites,
  onRemoveFavorite,
  onRandom,
}: Search) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim().toLowerCase());
      setSearchValue("");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 pb-3 relative z-20">
      {/* Favorites Dropdown */}
      <div className="relative group">
        <img
          src="./assets/star-1.png"
          className="cursor-pointer hover:rotate-12 hover:scale-110 transition-all duration-300 w-8 h-8"
          alt="Favorite List"
        />
        <ul
          className="absolute left-0 mt-3 w-56 bg-white border border-gray-300 shadow-xl rounded-xl p-2 space-y-2 
    opacity-0 invisible group-hover:opacity-100 group-hover:visible 
    transition-opacity duration-200 ease-in-out z-30"
        >
          {favorites.length > 0 ? (
            favorites.map((name, i) => (
              <li
                key={i}
                className="flex items-center justify-between bg-gray-50 hover:bg-blue-50 p-2 rounded-md transition-all duration-150"
              >
                {/* Image + Name */}
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => onSearch(name.toLowerCase())}
                >
                  <img
                    src="/assets/pokeball.png"
                    alt={name}
                    className="w-6 h-6"
                    onError={(e) =>
                      ((e.target as HTMLImageElement).src =
                        "/assets/pokeball.png")
                    }
                  />
                  <span className="capitalize text-sm">{name}</span>
                </div>
                {/* Remove Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Specific point !trigger
                    onRemoveFavorite(name);
                  }}
                  className="text-gray-400 hover:text-red-500 text-sm px-2"
                >
                  ❌
                </button>
              </li>
            ))
          ) : (
            <li className="text-sm text-gray-400 px-3 py-2">
              No favorites yet
            </li>
          )}
        </ul>
      </div>
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="relative w-full max-w-md">
        <input
          type="search"
          id="searchBarInput"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full py-3 pl-10 pr-32 text-sm text-gray-800 border border-gray-300 rounded-xl bg-white shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
          placeholder="Search Pokémon by ID or Name"
          required
        />
        {/* Search Icon */}
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
            />
          </svg>
        </div>
        {/* Search Button */}
        <button
          type="submit"
          className="absolute right-2 bottom-2 top-2 bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg text-sm font-medium transition-all"
        >
          Search
        </button>
      </form>

      {/* Randomize Button */}
      <button
        type="button"
        id="randomButton"
        onClick={onRandom}
        className="py-3 px-5 text-sm font-medium text-white bg-amber-400 hover:bg-yellow-600 rounded-xl shadow-md transition-all"
      >
        Randomize
      </button>
    </div>
  );
};

export default SearchBar;
