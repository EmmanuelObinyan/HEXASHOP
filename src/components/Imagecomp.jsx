import React from 'react'

const Imagecomp = ({bg_headtext,bg_text,bg_image}) => {
  return (
    <div 
    className={`flex
    flex-col
    justify-center
    text-center
    bg-cover
    bg-center
    bg-no-repeat
    xs:h-70
    xs:w-35
    sm:w-40 mt-2
    sm:h-80
    md:h-90 
    md:w-50 ml-4
    lg:w-80
    lg:h-120
    `}
     style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url(${bg_image})`}}>
          <h2 
          className="
          text-white
          font-medium
          p-2
          capitalize
          md:mb-3
          lg:mb-8
          xs:text-lg
          sm:text-xl
          md:text-2xl
          lg:text-4xl
          " >{bg_headtext}</h2>
          <p 
          className="
           text-white
            font-light
            lowercase
            xs:text-xs
            sm:text-xs
            md:text-sm
            lg:text-md
          ">{bg_text}</p>
    </div>
  )
}

export default Imagecomp