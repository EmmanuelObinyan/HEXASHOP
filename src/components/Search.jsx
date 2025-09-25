import React, { use } from 'react'
import { FiSearch } from 'react-icons/fi'
import {useTheme} from '../config/ThemeContext'
const Search = ({text,handleChange,searchtext}) => {
  const{dark}=useTheme()
  return (
    <div className={`w-fit ${dark ? "text-white":"text-gray-700"} relative mr-3 flex flex-col  xs:justify-self-center  `}>
        <FiSearch
         className=' xs:text-lg  lg:text-xl left-2 top-3 absolute font-bold  pointer-events-none'
        />
        <input 
        type="search"
        value={text}
        onChange={handleChange}
        placeholder='enter product name here'
        className={`py-2 pl-8 
         rounded-xl
          border-1
           border-gray-300  
           xs:w-80
           sm:w-100
           md:w-125
           lg:w-160
          placeholder:capitalize ${dark ? "text-white":"text-gray-700"}  xs:text-sm  md:text-md lg:text-lg  font-medium`}
        />
        <p className='font-semibold mt-2 capitalize xs:text-left  italic   p-1 xs:text-xs sm:text-sm md:text-md lg:text-lg'>{searchtext}</p>
    </div>
  )
}

export default Search