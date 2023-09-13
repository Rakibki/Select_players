import React from 'react'
import SinglePlayer from '../singlePlayer/SinglePlayer'

const Player = ({players, handleSelect}) => {
  return (
    <div className='w-full md:w-2/3 lg:w-2/3'>
        <h1 className='text-2xl my-6 text-orange-600 font-bold text-center'>All Players</h1>
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
            {
                players.map((item) => <SinglePlayer handleSelect={handleSelect} key={item.ID} item={item} />)
            }
        </div>
    </div>
  )
}

export default Player