import React from 'react'
import { useState,useEffect } from 'react'
import {useCart} from '../config/CartProvider'
const Checkout = () => {
  const{discountPrice,cart}=useCart()
  // for the total item in the cart
  const itemtotal=cart.reduce((acc,item)=>acc + item.quantity,0)
  // for the shipping fee
  const[shippingfee,setShippingFee]=useState(0)
    useEffect(()=>{
       if(discountPrice >= 200){
        setShippingFee(10.56)
       }
       else if(discountPrice <= 100){
         setShippingFee(5.45)
       }
       else if(discountPrice <= 200){
        setShippingFee(9.55)
       }
    },[discountPrice])
    // total fee calculated
   const totalFee=shippingfee + discountPrice
  return (
    <div className='border-1  border-gray-300 p-3 xs:w-[85%] sm:w-[65%] md:w-[50%] flex flex-col justify-self-center h-65 rounded-2xl bg-gray-50'>
          <span className='flex justify-between p-2 mt-5 '>
            {/* for the item price and its quantity in cart */}
             <p className='font-light text-gray-600 xs:text-sm sm:text-sm md:text-md lg:text-lg capitalize '>{`item-total(${itemtotal})`}</p>
             <p className='font-semibold text-gray-600 xs:text-sm sm:text-sm md:text-md lg:text-xl '>${discountPrice.toFixed(2)}</p>
          </span>
          <span className='flex justify-between p-2 mt-3 '>
             <p className='font-light text-gray-600 xs:text-sm sm:text-sm md:text-md lg:text-lg capitalize '>delivery fees</p>
             <p className='font-semibold text-red-600 xs:text-sm sm:text-sm md:text-md lg:text-xl '>-${shippingfee}</p>
          </span>
           <hr className='border-1 mt-3 w-[90%] block mx-auto border-gray-300' />
           <span className='flex justify-between p-2 mt-5 '>
             <p className='font-semibold text-gray-800 xs:text-sm sm:text-sm md:text-lg lg:text-xl capitalize '>total</p>
             <p className='font-semibold text-gray-800 xs:text-sm sm:text-sm md:text-lg lg:text-2xl '>${totalFee.toFixed(2)}</p>
          </span>
              
        </div>
  )
}

export default Checkout