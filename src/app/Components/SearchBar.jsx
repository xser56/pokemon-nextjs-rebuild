import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <div className="relative group flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 pb-3">
        {/* <!-- Favorites Button --> */}
    <div className="relative inline-block group">
        {/* <!-- Star Icon --> */}
        <img src="./assets/star-1.png" 
            className="cursor-pointer hover:scale-110 transition-all duration-200 w-8 h-8" 
            alt="Favorite List"/>
              
        {/* <!-- Hover List (Dropdown) --> */}
        <ul id="favoritesList" 
            className="absolute left-50 mt-2 w-40 bg-white border border-gray-300 shadow-md rounded-lg p-2 
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-opacity duration-200 ease-in-out z-10">
        {/* <!-- Dropdown Content Here --> */}
        </ul>
    </div>

        {/* <!-- Search Bar --> */}
        <form id="searchForm" className="max-w-md w-full">
            <label htmlFor="searchBarInput" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center ps-3">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="search" id="searchBarInput" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Pokemon by ID or Name Here" required />
                <button id="searchBarButton" type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
        <button type="button" id="randomButton" className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-amber-300 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Randomize</button>
    </div>
    </div>
  )
}

export default SearchBar
