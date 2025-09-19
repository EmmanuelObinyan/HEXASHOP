import React from 'react'
import casual from '../assets/casual.png'
import party from '../assets/party.png'
import gym from '../assets/gym.png'
import formal from '../assets/formal.png'
const Browse = () => {
  return (
    <div 
    className='text-center 
    mt-20
    mb-2
    border-1
    border-gray-300
    rounded-xl
    py-3
    px-4
    sm:text-2xl
    md:text-3xl
    lg:text-4xl 
    mx-auto
    text-gray-800
    font-bold
    sm:w-140
    md:w-200
    lg:w-320
     capitalize'>
      browse by products
    <section 
    className='grid 
    h-fit
    pt-4
    md:grid-cols-2
    '>
         <img src={casual} 
          className='
          shadow-black
          rounded-xl
          xs:w-70
          sm:w-80
          md:w-90
          lg:w-120
          '
         alt="" />
         <div 
         className='relative'>
             <p className='absolute 
             top-6 
             left-6
             sm:text-xl
            lg:text-2xl
               text-black'>format</p>
             <img src={formal}
              className='
               shadow-black
              rounded-xl
              xs:w-90
              sm:w-95
              md:w-100
              lg:w-full
              '
             alt="" />
         </div>
       
         <img src={party} 
         className='
         rounded-xl
           mt-4
           xs:w-90
           sm:w-95
           md:w-100
           lg:w-full
           shadow-black
         '
         alt="" />

         <div 
         className='relative'>
             <p 
             className='absolute sm:text-xl
            lg:text-2xl 
             top-6 
             left-5
             text-black' >gym</p>
             <img src={gym} 
             className='rounded-xl
             shadow-black
             xs:w-70
             sm:w-80
             md:w-90
              lg:w-120 '
             alt="" />
         </div>
   </section>
  </div> 
  )
}

export default Browse