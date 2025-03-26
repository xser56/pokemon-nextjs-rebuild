import React from 'react'

const DisplayMoves = () => {
  return (
    <div>
      <div className="row-span-2 p-2 h- bg-[#a8c1ea7f] rounded-2xl border-1">
        <h1 className="flex justify-center">Moves</h1>
        <div className="grid grid-cols-2 place-items-center text-2xl max-h-[600px] overflow-y-auto px-5 py-3">
            <ul id="moveList1"></ul>
            <ul id="moveList2"></ul>
        </div>
    </div>
    </div>
  )
}

export default DisplayMoves
