import React from 'react'
import { useState,useEffect } from 'react'
import { useCurrency } from '../config/CurrencyContext'
import {useCart} from '../config/CartProvider'
import {useTheme} from '../config/ThemeContext'
const Checkout = () => {
  const{discountPrice,cart,shippingfee}=useCart()
  const{currencyData,option}=useCurrency()
  const{dark}=useTheme()
  // for the total item in the cart
  const itemtotal=cart.reduce((acc,item)=>acc + item.quantity,0)
    // total fee calculated
   const totalFee=shippingfee + discountPrice
      
  return (
    <div className={`border-1  border-gray-200 p-3 xs:w-[85%] sm:w-[65%] md:w-[50%] flex flex-col justify-self-center h-65 rounded-2xl transition-all ease duration-200 ${dark ? "bg-[#1A1D25] text-white":"bg-gray-50 text-gray-800"}`}>
          <span className='flex justify-between p-2 mt-5 '>
            {/* for the item price and its quantity in cart */}
             <p className='font-light xs:text-sm sm:text-sm md:text-md lg:text-lg capitalize '>{`item-total(${itemtotal})`}</p>
             <p className='font-semibold  xs:text-sm sm:text-sm md:text-md lg:text-xl '>{`${option === 'NGN'? "NGN":"$"} ${option === "NGN" ? Math.round(currencyData * discountPrice) : discountPrice.toFixed(2)}`}</p>
          </span>
          <span className='flex justify-between p-2 mt-3 '>
             <p className='font-light  xs:text-sm sm:text-sm md:text-md lg:text-lg capitalize '>delivery fees</p>
             <p className='font-semibold text-red-600 xs:text-sm sm:text-sm md:text-md lg:text-xl '>{`${option === "NGN" ? "NGN":"$"}  ${option === "NGN" ? Math.round(currencyData * shippingfee ): shippingfee}`}</p>
          </span>
           <hr className='border-1 mt-3 w-[90%] block mx-auto border-gray-200' />
           <span className='flex justify-between p-2 mt-5 '>
             <p className='font-semibold  xs:text-sm sm:text-sm md:text-lg lg:text-xl capitalize '>total</p>
             <p className='font-semibold  xs:text-sm sm:text-sm md:text-lg lg:text-2xl '>{`${option === 'NGN' ? "NGN":"$"} ${option === 'NGN' ? Math.round(currencyData * totalFee) :totalFee.toFixed(2)}`}</p>
          </span>
              
        </div>
  )
}

export default Checkout
