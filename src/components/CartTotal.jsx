import React from 'react'
import Button from './Button'
import {useNavigate} from 'react-router-dom'
import {useCart} from '../config/CartProvider'
const CartTotal = () => {
   const{totalPrice,discountPrice}=useCart()
   const navigate=useNavigate()
  return (
    <>
     <p className='font-bold md:text-lg lg:text-2xl p-3 capitalize text-gray-800 border-1 border-gray-300'>order summary</p>
        <div className='border-1  border-gray-300 p-3'>
          <span className='flex justify-between p-2 mt-5 '>
             <p className='font-light text-gray-600 xs:text-sm sm:text-sm md:text-md lg:text-xl capitalize '>sub-total</p>
             <p className='font-semibold text-gray-600 xs:text-sm sm:text-sm md:text-md lg:text-xl '>${totalPrice}</p>
          </span>
          <span className='flex justify-between p-2 mt-3 '>
             <p className='font-light text-gray-600 xs:text-sm sm:text-sm md:text-md lg:text-xl capitalize '>discount(-20%)</p>
             <p className='font-semibold text-red-600 xs:text-sm sm:text-sm md:text-md lg:text-xl '>-${discountPrice.toFixed(2)}</p>
          </span>
           <hr className='border-1 mt-3 w-[90%] block mx-auto border-gray-300' />
           <span className='flex justify-between p-2 mt-5 '>
             <p className='font-semibold text-gray-800 xs:text-sm sm:text-sm md:text-md lg:text-xl capitalize '>total</p>
             <p className='font-semibold text-gray-800 xs:text-sm sm:text-sm md:text-md lg:text-2xl '>${discountPrice.toFixed(2)}</p>
          </span>
              <Button
                btnText={"checkout"}
                 btnFunction={()=>navigate('/deliverycheckoutpage')}
                btnClassname={"cart-classname"}
              />
        </div>
      </>
  )
}

export default CartTotal