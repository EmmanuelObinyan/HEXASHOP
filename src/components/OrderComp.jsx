import React from "react";
import { useCurrency } from "../config/CurrencyContext";
import { useTheme } from "../config/ThemeContext";
import { FaCheckCircle } from "react-icons/fa";
const OrderComp = ({ products }) => {
  const { dark } = useTheme();
  const { currencyData, option } = useCurrency();
  return (
    <div
      className={`grid 
            place-items-center 
            gap-1
            w-full
            bg-gray-150
            transition-all
            ease
            ${dark ? "text-white" : "text-gray-700"}
            duration-150 
            xs:grid-cols-2 
            sm:grid-cols-2 
            md:grid-cols-4 
            lg:grid-cols-4 `}
    >
      {" "}
      {products.map((product) => (
        <div
          key={product.id}
          className={`my-3 p-2  xs:w-49 sm:w-58 md:w-59 lg:w-95 ${
            dark ? "border-1  border-gray-500" : "border-1 border-gray-200"
          }`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full object-cover object-center  -mb-1  pb-1 xs:h-30 sm:h-37 md:h-40 lg:h-62"
          />
          <div className="flex flex-col ">
            <div className="ml-2 border-b-1 border-gray-300">
              <p className="capitalize font-semibold  py-1 leading-5 mb-1 border-b-1 border-gray-300  xs:text-xs sm:text-sm md:text-md lg:text-lg">
                {product.name}
              </p>
              <span className="font-light  mb-1 xs:text-md sm:text-lg md:text-xl lg:text-2xl">
                {`${option === "NGN" ? "NGN" : "$"} ${
                  option === "NGN"
                    ? Math.round(currencyData * product.price)
                    : product.price
                }`}
              </span>
            </div>
             <span className=" capitalize md:text-md lg:text-lg font-semibold mx-3">
                  {`quantity x${product.quantity}`}
                </span>
          </div>
          <span className="ml-1 flex items-center my-2">
            <FaCheckCircle className="mr-1 xs:h-5 sm:h-6 md:h-8 lg:h-10   xs:w-12 sm:w-15  md:w-17 lg:w-20 text-green-600 animate-pulse duration-200 ease" />
            <p className="xs:text-xs sm:text-sm md:text-md lg:text-lg font-semibold capitalize text-green-600">
              ordered successfully
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};

export default OrderComp;
