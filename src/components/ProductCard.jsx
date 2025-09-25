import React from "react";
import { Toaster } from "react-hot-toast";
import {useCurrency} from '../config/CurrencyContext'
import { FaRegStarHalf } from "react-icons/fa";
import { useCart } from "../config/CartProvider";
import { FaRegStar } from "react-icons/fa";
import {useTheme} from '../config/ThemeContext'
import { FaShoppingCart } from "react-icons/fa";
const ProductCard = ({ show, data }) => {
  // data
  const{dark}=useTheme()
  const { addProduct } = useCart();
// to change the currency value of the card
const{option,currencyData}=useCurrency()
  return (
    <div
      className={`grid 
            place-items-center 
            gap-1
            w-full
            bg-gray-150
            transition-all
            ease
            ${dark ? "text-white":"text-gray-700"}
            duration-150 
            xs:grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4 
            lg:grid-cols-4 `}
    >
      <Toaster />
      {show
        ? data.map((product) => (
            <div
              key={product.id}
              className={`mb-2 p-2  xs:w-49 sm:w-58 md:w-59 lg:w-95 ${dark ? "border-1  border-gray-500":"border-1 border-gray-200"}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover object-center  -mb-1 rounded-tl-xl rounded-tr-xl pb-1 xs:h-30 sm:h-37 md:h-40 lg:h-62"
              />
              <div className="flex flex-col ">
                <div className="ml-2 border-b-1 border-gray-300">
                  <p className="capitalize font-semibold  py-1 leading-5 mb-1 border-b-1 border-gray-300  xs:text-xs sm:text-sm md:text-md lg:text-lg">
                    {product.name}
                  </p>
                  <span className="font-medium  mb-1 xs:text-md sm:text-lg md:text-xl lg:text-2xl">
                    {`${option === "NGN" ? "NGN" : "$"} ${option === "NGN" ? Math.round(currencyData * product.price ):product.price}`}
                  </span>
                </div>
                <div>
                  {product.rating === "4.5/5" && (
                    <span className="flex ml-2 items-center justify-around mb-1 xs:w-[42%] sm:w-[40%] md:w-[45%] lg:w-[48%]">
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStarHalf className="text-yellow-400 text-lg" />
                      <p className="font-medium  xs:text-sm sm:text-md md:text-lg lg:text-xl">
                        {product.rating}
                      </p>
                    </span>
                  )}
                  {product.rating === "5/5" && (
                    <span className="flex ml-2 items-center justify-around mb-1 xs:w-[42%] sm:w-[40%] md:w-[45%] lg:w-[48%]">
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <p className="font-medium  xs:text-sm sm:text-md md:text-lg lg:text-xl">
                        {product.rating}
                      </p>
                    </span>
                  )}
                  {product.rating === "4/5" && (
                    <span className="flex ml-2 items-center justify-around mb-1 xs:w-[42%] sm:w-[40%] md:w-[45%] lg:w-[47%]">
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <p className="font-medium  xs:text-sm sm:text-md md:text-lg lg:text-xl">
                        {product.rating}
                      </p>
                    </span>
                  )}
                  <div className="flex justify-self-end justify-center mr-4 xs:w-12 sm:w-15 md:w-20 lg:w-25 xs:pb-1 lg:pb-3">
                    <FaShoppingCart
                      className=" xs:text-lg sm:text-xl md:text-2xl lg:text-3xl"
                      onClick={() => addProduct(product)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))
        : data.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className={`mb-2 p-2 shadow xs:w-49 sm:w-58 md:w-59 lg:w-95 ${dark ? "border-1  border-gray-500":"border-1 border-gray-200"}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover object-center -mb-1 rounded-tl-xl rounded-tr-xl pb-1 xs:h-30 sm:h-37 md:h-40 lg:h-62"
              />
              <div className="flex flex-col">
                <div className="ml-2 border-b-1 border-gray-300">
                  <p className="capitalize font-semibold py-1 leading-5 mb-1 border-b-1 border-gray-300  xs:text-xs sm:text-sm md:text-md lg:text-lg">
                    {product.name}
                  </p>
                  <span className="font-medium  mb-1 xs:text-sm sm:text-lg md:text-xl lg:text-2xl">
                    {`${option === "NGN" ? "NGN" : "$"} ${option === "NGN" ? Math.round(currencyData * product.price ):product.price}`}
                  </span>
                </div>
                <div>
                  {product.rating === "4.5/5" && (
                    <span className="flex ml-2 items-center justify-around mb-1 xs:w-[42%] sm:w-[40%] md:w-[45%] lg:w-[48%]">
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStarHalf className="text-yellow-400 text-lg" />
                      <p className="font-medium  xs:text-sm sm:text-md md:text-lg lg:text-xl">
                        {product.rating}
                      </p>
                    </span>
                  )}
                  {product.rating === "5/5" && (
                    <span className="flex ml-2 items-center justify-around mb-1 xs:w-[42%] sm:w-[40%] md:w-[45%] lg:w-[48%]">
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <p className="font-medium  xs:text-sm sm:text-md md:text-lg lg:text-xl">
                        {product.rating}
                      </p>
                    </span>
                  )}
                  {product.rating === "4/5" && (
                    <span className="flex ml-2 items-center justify-around mb-1 xs:w-[42%] sm:w-[40%] md:w-[45%] lg:w-[47%]">
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <FaRegStar className="text-yellow-400 text-lg" />
                      <p className="font-medium  xs:text-sm sm:text-md md:text-lg lg:text-xl">
                        {product.rating}
                      </p>
                    </span>
                  )}
                  <div className="flex justify-self-end justify-center mr-4 xs:w-12 sm:w-15 md:w-20 lg:w-25 xs:pb-1 lg:pb-3">
                    <FaShoppingCart
                      className=" xs:text-lg sm:text-xl md:text-2xl lg:text-3xl"
                      onClick={() => addProduct(product)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export default ProductCard;
