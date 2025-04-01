'use client';
import React, { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('pokemonFavorites');
    if (stored) {
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage when favorites update
  useEffect(() => {
    localStorage.setItem('pokemonFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Optional: You can use this function to add/remove from favorites elsewhere
  const toggleFavorite = (pokemon) => {
    setFavorites((prev) => {
      const exists = prev.find((fav) => fav.id === pokemon.id);
      return exists
        ? prev.filter((fav) => fav.id !== pokemon.id)
        : [...prev, pokemon];
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim().toLowerCase());
      setSearchValue("");
    }
  };

  const handleFavoriteClick = (fav) => {
    onSearch(fav.name.toLowerCase());
  };

  return (
    <div>
      <div className="relative group flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 pb-3">

        {/* Favorites Dropdown */}
        <div className="relative inline-block group">
          <img
            src="./assets/star-1.png"
            className="cursor-pointer hover:scale-110 transition-all duration-200 w-8 h-8"
            alt="Favorite List"
          />
          <ul
            id="favoritesList"
            className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-lg p-2 
              opacity-0 invisible group-hover:opacity-100 group-hover:visible 
              transition-opacity duration-200 ease-in-out z-10"
          >
            {favorites.length > 0 ? (
              favorites.map((fav) => (
                <li
                  key={fav.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                  onClick={() => handleFavoriteClick(fav)}
                >
                  {fav.name}
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500">No favorites yet</li>
            )}
          </ul>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="max-w-md w-full">
          <label htmlFor="searchBarInput" className="sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center ps-3">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="searchBarInput"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Pokemon by ID or Name Here"
              required
            />
            <button
              id="searchBarButton"
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>

        {/* Random Button (still wired to nothing) */}
        <button
          type="button"
          id="randomButton"
          className="py-2.5 px-5 text-sm font-medium bg-amber-300 rounded-lg hover:bg-gray-100"
        >
          Randomize
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
