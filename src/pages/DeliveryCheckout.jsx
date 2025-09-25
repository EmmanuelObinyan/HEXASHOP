import React from "react";
import { useCart } from "../config/CartProvider";
import Checkout from "../components/Checkout";
import CustomerAddress from "../components/CustomerAddress";
import { Link} from "react-router-dom";
import {useTheme} from '../config/ThemeContext'
const DeliveryCheckout = () => {
  const { scrollRef } = useCart;
  const{dark}=useTheme()
  return (
    <>
      <div
        className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 bg-[cream] transaition-all ease duration-200 ${dark ? "text-white":"text-gray-700"} `}
      >
        <Link
          className="capitalize font-semibold mb-3 w-fit ml-4 xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
          to={"/cartspage"}
        >
          back to cart
        </Link>
        <h2
          className="mt-4
           text-center 
           uppercase pb-3 
           font-bold
          xs:text-lg
            sm:text-xl
            lg:text-2xl
          "
          ref={scrollRef}
        >
          select delivery method
        </h2>
        {/* to display the total of products for the cart */}
        <Checkout />
        <CustomerAddress />
      </div>
      <p className={`uppercase ${dark ? "text-white":"text-gray-700"} my-4 text-center xs:text-xs md:text-sm`}>
        @hexashop 2025 edition limited
      </p>
    </>
  );
};

export default DeliveryCheckout;
