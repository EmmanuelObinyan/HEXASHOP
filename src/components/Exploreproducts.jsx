import React from 'react'
import Imagecomp from './Imagecomp'
const Exploreproducts = () => {
  return (
    <div 
    className="
    h-fit
    mb-2
    place-self-center
    grid
    sm:grid-cols-1
    md:grid-cols-2
    ">
        <div
         className="
         xs:w-88
         sm:w-120 mx-auto 
         md:w-130 
         lg:w-200">
                <h2 
                className='
                text-center 
                capitalize
                 font-semibold
                 text-gray-700
                 p-2
                 md:mt-20
                 lg:mt-50
                 md:text-3xl
                lg:text-4xl
                '>
                    explore our products
                </h2>
                <p 
                className='
                font-medium
                text-gray-600
                md:w-100
                lg:w-180
                xs:text-xs 
                sm:text-xs 
                md:text-xs mx-auto
                lg:text-lg
                md:leading-5.5
                lg:leading-8
                '>
               Lorem Ipsum is simply dummy text 
               of the printing and typesetting industry. Lorem Ipsum has been 
               the industry's standard dummy text ever since the 1500s, when an unknown printer
               took a galley of type and scrambled it to make a type specimen book. 
              It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset 
              sheets containing Lorem Ipsum passages, and more recently with 
              desktop publishing software like Aldus PageMaker including versions 
              of Lorem IpsuLorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy text ever since 
              the 1500s, when an unknown printer took a galley of type and scrambled it to
              
               make a type specimen book. It has survived not only five centuries, 
               but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop publishing
               software like Aldus PageMaker including versions of Lorem IpsuLorem Ipsum is
                simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                 been the industry's standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book. 
                  It has survived not only five centuries, but also the leap into electronic typesetting,
                   remaining essentially unchanged. It was popularised in the 1960s with the release of
                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                     publishing software like Aldus PageMaker including versions of Lorem Ipsu
                </p>
        </div>
          <div 
          className="
          grid 
          place-self-center
          gap-3
          grid-cols-2
          md:w-110
          lg:w-165
          ">
            <Imagecomp
              bg_image="/product1.png"
              bg_headtext="leather bags"
              bg_text="Lorem Ipsum is simply dummy text "
            />
             <Imagecomp
              bg_image="/product2.png"
              bg_headtext="accessories"
             />
              <Imagecomp
               bg_image="/product3.png"
               bg_headtext="dressing"
              />
               <Imagecomp
                 bg_image="/product4.png"
                 bg_headtext="different types"
                 bg_text={"Lorem Ipsum is simply dummy text "}
               />
          </div>
    </div>
  )
}

export default Exploreproducts