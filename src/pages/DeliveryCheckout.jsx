import React from "react";
import { useCart } from "../config/CartProvider";
import Checkout from "../components/Checkout";
import CustomerAddress from "../components/CustomerAddress";
import { Link, useNavigate } from "react-router-dom";
const DeliveryCheckout = () => {
  const { scrollRef } = useCart;
  return (
    <>
      <div
        className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 bg-[cream] `}
      >
        <Link
          className="capitalize font-semibold mb-3 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
          to={"/cartspage"}
        >
          back to cart
        </Link>
        <h2
          className="mt-4
           text-center 
           uppercase pb-3 
           font-bold
            text-gray-700 
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
      <p className="uppercase my-4 text-center text-gray-800 xs:text-xs md:text-sm">
        @hexashop 2025 edition limited
      </p>
    </>
  );
};

export default DeliveryCheckout;
