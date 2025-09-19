import React from 'react'
import { useNavigate } from 'react-router-dom'

const Collection = ({image_1,image_2,navigation,head_text}) => {
    const navigate=useNavigate()
  return (
    <div className="mt-8 grid h-fit 
    mb-6
    py-1
    xs:grid-cols-1
    md:grid-cols-2 
    bg-cover
    bg-left
    text-white
    place-self-center 
    w-[90%]" style={{background:`linear-gradient(to right,rgba(0,0,0,0.5),rgba(0,0,0,0.8)),url('/womanlogin.png')`}} >
        {/* first col */}
        <div className='grid gap-1  place-items-center grid-cols-2'>
            <img src={image_1} alt="" 
            className='
            bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.9))]
            opacity-60
            object-cover
    xs:h-70
    xs:w-35
    sm:w-40 mt-2
    sm:h-80
    md:h-90 
    md:w-50 ml-4
    lg:w-80
    lg:h-120
    ' />
            <img src={image_2} alt="" 
              className='
              opacity-60
              object-cover
    xs:h-70
    xs:w-35
    sm:w-40 mt-2
    sm:h-80
    md:h-90 
    md:w-50 ml-4
    lg:w-80
    lg:h-120
    '
            />
        </div>
           {/* second col */}
        <div className=''>
            <p className='text-center capitalize py-2 xs:text-2xl md:text-3xl lg:text-4xl font-semibold'>{head_text}</p>
            <p className='text-center mx-auto font-medium my-3 w-[85%] capitalize xs:text-sm lg:text-lg'> Crafted for comfort and style, 
                this versatile piece is designed to
                 suit any occasion.  Easy to style and care for, its a go-to choice for kids, 
                women, and men who value both fashion and function.
                Whether its for school, work, play, or relaxation, this piece adapts effortlessly to your lifestyle. The lightweight yet sturdy material provides lasting comfort, while the easy-care fabric makes it simple to wash and wear again.

                Perfect for layering in cooler weather
                or wearing on its own in warmer seasons, this clothing piece is a true all-rounder. With its blend of practicality and fashion, it’s the kind of item that belongs in every closet—reliable, stylish, 
                and made to move with you through every moment of the day.
                </p>
                <span className='p-2 mx-auto 
                    block w-fit border-2
                    duration-200 transition-all
                    cursor-pointer
                    capitalize
                    font-semibold
                     active:scale-95
                    border-white' onClick={()=>navigate(`${navigation}`)} >
                        discover more
                    </span>
        </div>
    </div>
  )
}

export default Collection