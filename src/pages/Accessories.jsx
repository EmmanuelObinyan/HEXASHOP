import React from 'react'
import Nav from '../components/Nav'
import mencloth1 from '../assets/mencloth1.png'
import Footer from '../components/Footer'
import womencloth1 from '../assets/womencloth1.jpg'
import Collection from '../components/Collection'
import AccessoriesCard from '../components/AccessoriesCard'
import {useFave} from '../config/useFave'
import {useCart} from '../config/CartProvider'
const Accessories = () => {
   const{scrollRef}=useCart()
  const{loading}=useFave()
  return (
    <>
      <Nav />
        <div  className={`xs:mt-20 
            sm:mt-25 md:mt-27 lg:mt-29 `}>
          <p className="capitalize font-medium mb-3 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md">
                    {"homepage > accessories"}
                  </p>
              <h2
            className="mt-4
           text-center 
           border-b-1
           border-gray-300
           shadow
           uppercase pb-3 
           font-bold
            text-gray-700 
          xs:text-xl
            sm:text-2xl
            lg:text-3xl
          "
          ref={scrollRef}
          >

            latest accessories 
          </h2>   
            <AccessoriesCard
             show={true}
            />
          <Collection
           head_text={"explore our versatile clothes/electronics collection"}
           image_1={mencloth1}
           image_2={womencloth1}
          /> 

          <Footer />
        </div>
     
    </>
  )
}

export default Accessories