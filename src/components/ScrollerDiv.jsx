import React from 'react'
import Marquee from 'react-fast-marquee'
import adidas from '../assets/adidas.png'
import mcdonalds from '../assets/mcdonalds.png'
import nike from '../assets/nike.png'
import dior from '../assets/dior.png'
import jordan from '../assets/jordan.png'
import {useTheme} from '../config/ThemeContext'
import zara from '../assets/zara.png'
const ScrollerDiv = () => {
    const{dark}=useTheme()
  return (
       <>
       <p className={`text-center
        p-2 mt-7
         font-bold 
          ${dark ? "text-white":"text-gray-800"}
         uppercase
         xs:text-xl
         sm:text-2xl
         md:text-3xl
         lg:text-4xl
         `}>top contributors</p>
      <div className= 'bg-gray-900 mb-3'>
       < Marquee 
       gradientWidth={50} 
       pauseOnHover
       gradientColor={[255,255,255]}
       >
    <div className='flex p-2 
    justify-center
    text-white
     items-center'>
         <span className='h-15
            w-[5%] 
            ml-20 
            mr-40' >
             <img src={adidas} alt="" 
              className='h-9
               w-[100%] 
               brightness-0 
               invert' />
             <p className='font-semibold 
             '>adidas</p>
         </span>
         
         <span
          className='h-15 
          w-[5%]
           mr-40' >
            <img src={nike} alt="" 
            className='h-9 
            brightness-0
            invert
            w-[100%]' />
            <p className='font-semibold 
            capitalize'>nike</p>
         </span>
         
         <span className='h-15 w-[5%] mr-40'>
            <img src={jordan}
            alt="" 
            className='h-9 
            brightness-0
            invert
            w-[100%]' />
            <p className='font-semibold
            '>jordan</p>
         </span>
            
            <span className='h-15
            w-[5%] 
            ml-20 
            mr-40' >
             <img src={mcdonalds} alt="" 
              className='h-9
               w-[100%] 
               brightness-0 
               invert' />
             <p className='font-semibold 
             '>Mcdonalds</p>
         </span>

          <span className='mr-40'>
             <img src={dior} 
             alt="" 
             className='h-15
             brightness-0
             invert
             w-20 '/>
        </span>


         <span className='mr-40'>
            <img src={zara} 
            alt=""
             className='h-15
             brightness-0
             invert
             w-20' />
         </span>
    </div> 
    </Marquee>
   </div>    
  </>  
  )
}

export default ScrollerDiv