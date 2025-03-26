import React from 'react'

const DisplayPoke = () => {





  return (
    <div>
      <div className="row-span-2 bg-[#a8c1ea7f] rounded-2xl border-1">
        <div className="flex justify-between">
            <div className="flex items-center">
                <img src="./assets/pokeball.png" id="favoritesButton" className="cursor-pointer w-20 h-20 hover:scale-110  transition-all duration-200"
                alt="Favorite List"/>    
                <img src="./assets/sparkle.png" id="shinyToggleButton"  className="mt-5 h-10 w-10 cursor-pointer hover:scale-110  transition-all duration-200" alt="shinyIcon"/>
            </div>
             <button className=" rounded-10xl"id="shinyToggleButton">Show Shiny</button>
            <h2 id="pokeIndexNum" className="px-5 py-5"> pokeID</h2>
        </div>

        <div className="relative flex flex-col items-center justify-center text-center">
            <img id="pokemonImage" className="w-100 h-100 " alt=""/>
            <h1 id="pokemonName" className="flex justify-center text-5xl"></h1>    
        </div>
        {/* <!-- Types --> */}
        <ul className="text-3xl font-sans flex justify-center pb-10">
                <li id="typeList1"></li>
                <li id="typeList2"></li>
            </ul>

            <div className="flex justify-around">
                {/* <!-- Evolution 1 --> */}
                <div className="flex flex-col items-center text-center">
                    <img id="eve1png" className="w-40 h-40" alt=""/>
                    <h2 id="eve1" className="mt-2 text-lg"></h2>
                </div>
            
                {/* <!-- Evolution 2 --> */}
                <div className="flex flex-col items-center text-center">
                    <img id="eve2png" className="w-40 h-40" alt=""/>
                    <h2 id="eve2" className="mt-2 text-lg"></h2>
                </div>
            </div>
            
    </div> 
    </div>
  )
}

export default DisplayPoke
