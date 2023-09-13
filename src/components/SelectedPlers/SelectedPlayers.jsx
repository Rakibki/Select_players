import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai';

const SelectedPlayers = ({seletPlays, handleDelete}) => {
  return (
    <div className='w-full md:w-1/3 lg:w-1/3'>
      <h1 className='text-2xl my-6 text-orange-600 font-bold text-center'>Seleted Players {seletPlays.length}</h1>
      {
        seletPlays.map((item, index) => {
          return <div key={index} className='p-4 mb-3 items-center flex rounded-lg gap-3 shadow-lg'>
              <div>
                  <img className='rounded-full w-16' src={item.img} alt="" />
              </div>
              <div>
                <h3 className='text-lg font-semibold'>{item.Name}</h3>
                <div className='flex gap-6 font-medium text-slate-500'>
                    <p>Salary: {item.Salary}</p>
                    <h4>age: {item.Age}</h4>
                </div>
              </div>
                <button onClick={() => handleDelete(item.ID)} className='ml-15 text-2xl'><AiTwotoneDelete /></button>
          </div>
        })
      }
    </div>
  )
}

export default SelectedPlayers