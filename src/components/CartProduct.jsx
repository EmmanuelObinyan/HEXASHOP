import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { useCart } from "../config/CartProvider";
import { FaMinus } from "react-icons/fa";
import {useCurrency} from '../config/CurrencyContext'
const CartProduct = () => {
  const { cart, increaseQuantity, decreaseQuantity, deleteCart } = useCart();
   const{option,currencyData}=useCurrency()
  return (
    <>
      {cart.map((item) => (
        <div
          className="h-fit flex   p-2 xs:flex-col lg:flex-row"
          key={item.id}
        >
          {/* first section */}
          <div className=" xs:w-[full] sm:w-[12rem] lg:w-[17.5rem] sm:mx-auto lg:mx-0">
            <img
              src={item.image}
              alt=""
              className="xs:h-55 sm:h-50 lg:h-60 object-cover rounded-xl object-top w-full "
            />
          </div>
          {/* second section */}
          <div className="md:h-50 lg:h-60 flex justify-between xs:flex-col lg:flex-row ">
            {/* inner sections */}
            <div className="md:w-[full] lg:w-[fit-content] flex flex-col justify-around">
              <p className="xs:text-md md:text-xl lg:text-2xl text-gray-700 font-bold capitalize p-2 md:text-center lg:text-left">
                {item.name || item.title}
              </p>
              <p className="px-1 lg:-mt-2 font-light capitalize text-gray-700 xs:text-xs sm:text-sm lg:text-md">
                size: normal
              </p>
              <p className="lg:-mt-8 font-light px-1 capitalize text-gray-700  xs:text-xs sm:text-sm lg:text-md">
                color: default color
              </p>
              <p className="lg:-mt-8 font-medium px-1 capitalize text-gray-700  xs:text-xs sm:text-sm lg:text-md">
                quantity:{item.quantity}x
              </p>
              {/* for the price */}
              <p className="xs:text-md md:text-xl lg:text-2xl text-gray-700 p-2 font-semibold ">
                {`${option === 'NGN' ? "NGN" :"$"} ${option === 'NGN' ? Math.round(currencyData *item.price * item.quantity) : item.price * item.quantity}`}
              </p>
            </div>
            {/* for the last wrapper */}
            <div className="xs:w-[15rem] sm:w-[14rem] md:w-[15rem] lg:w-[fit-content] flex xs:mx-auto md:ml-15 justify-between lg:flex-col lg:justify-around ml-35">
              {/* to delete item from cart */}
              <FaRegTrashAlt
                className="text-4xl lg:mx-auto font-bold p-2 text-red-500 "
                onClick={() => deleteCart(item.id)}
              />
              <button className="xs:w-24 md:w-25 lg:w-30 p-2 border-1 border-gray-300 text-gray-800 rounded-lg flex items-center bg-gray-100 justify-center">
                {/* for the increase quantity of the cart */}
                <FaPlus
                  className="md:text-lg lg:text-xl font-bold "
                  onClick={() => increaseQuantity(item)}
                />
                <span className="md:text-md lg:text-lg font-bold mx-3">
                  {item.quantity}
                </span>
                {/* for the decrease quantity of the cart */}
                <FaMinus
                  className="md:text-lg lg:text-xl font-semi "
                  onClick={() => decreaseQuantity(item)}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CartProduct;
