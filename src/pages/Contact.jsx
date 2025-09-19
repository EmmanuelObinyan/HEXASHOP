import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import {useCart} from '../config/CartProvider'
import ContactComp from '../components/ContactComp';
const Contact = () => {
   const{scrollRef}=useCart()
  return (

    <>
        <Nav/>
        <div className='xs:mt-16 sm:mt-17 md:mt-19 lg:mt-22 relative'>
           <div className='xs:h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] ' style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.6)),url('/womanlogin.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition:"center",
            backgroundSize: "cover",
          }} ref={scrollRef}>
            <p className=' absolute text-white  font-semibold top-[10%] xs:left-[10%] sm:left-[25%] md:left-[35%] xs:text-3xl sm:text-4xl  lg:text-6xl capitalize'> contact & services</p>
           </div>
               <div className='place-self-center md:-mt-[17%] gap-10 h-fit xs:w-[22rem] sm:w-[35rem] md:w-[50rem] lg:w-[65rem] mb-4 grid xs:grid-cols-1 md:grid-cols-2'>
                    <ContactComp/>
                     <ContactComp
                      show={false}
                     />
                 </div>
            <Footer/>
        </div>
    </>
  )
}

export default Contact