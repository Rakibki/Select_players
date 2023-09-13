import { Button } from '@mui/material'
import React from 'react'

const SinglePlayer = ({item, handleSelect}) => {
  return (
    <div className='bg-slate-200 rounded-md p-6'>
        <img className='rounded-full mx-auto w-[100px]' src={item?.img} alt="" />
        <h1 className='text-xl text-center font-semibold my-4'>{item.Name}</h1>
        <div className='flex space-y-2 flex-col items-center'>
            <p>Salary: {item.Salary}</p>
            <p>Country: {item.Country}</p>
            <h4>age: {item.Age}</h4>
        </div>
        <div className='flex mt-3 justify-center'>
            <Button onClick={() => handleSelect(item)} variant='contained'>Select</Button>
        </div>
    </div>
  )
}

export default SinglePlayer