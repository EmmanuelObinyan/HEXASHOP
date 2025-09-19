import React from 'react'
import { FiSearch } from 'react-icons/fi'
const Search = ({text,handleChange,searchtext}) => {
    
  return (
    <div className='w-fit relative mr-3 flex flex-col  xs:justify-self-center  '>
        <FiSearch
         className=' xs:text-lg  lg:text-xl left-2 top-3 absolute font-bold text-gray-600 pointer-events-none'
        />
        <input 
        type="search"
        value={text}
        onChange={handleChange}
        placeholder='enter product name here'
        className='py-2 pl-8 
         rounded-xl
          border-1
           border-gray-300  
           xs:w-80
           sm:w-100
           md:w-125
           lg:w-160
          placeholder:capitalize xs:text-sm  md:text-md lg:text-lg text-gray-500 font-medium'
        />
        <p className='font-semibold mt-2 capitalize xs:text-left  italic text-gray-600  p-1 xs:text-xs sm:text-sm md:text-md lg:text-lg'>{searchtext}</p>
    </div>
  )
}

export default Search