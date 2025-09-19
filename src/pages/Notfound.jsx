import React from 'react'
import Nav from '../components/Nav'
const Notfound = () => {
  return (
    <div className='bg-gray-100'>
    <Nav/>
    <div className=' xs:mt-18 sm:mt-20 md:mt-24 lg:mt-25' >
        <div className='flex 
        justify-self-center
         p-3 h-[35rem]  '>
            <p className='w-fit mt-60 capitalize 
            font-medium
             text-gray-500 
             xs:text-2xl 
            text-center 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl'>
                @products/page are not available right now!
            </p>
        </div>
    </div>
    </div>
  )
}

export default Notfound