import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../config/ThemeContext";
import { useAuth } from "../config/AuthContext";
import { useCurrency } from "../config/CurrencyContext";
import { useCart } from "../config/CartProvider";
const CartTotal = ({ handleFunction, show }) => {
  const { totalPrice, discountPrice } = useCart();
  const { user } = useAuth();
  const { dark } = useTheme();
  const { currencyData, option } = useCurrency();
  //  function
  return (
    <>
      <p
        className={`font-bold md:text-lg lg:text-2xl p-3 capitalize ${
          dark ? "text-white" : "text-gray-700"
        } border-1 border-gray-300`}
      >
        order summary
      </p>
      <div
        className={`border-1 ${
          dark ? "text-white" : "text-gray-700"
        }  border-gray-300 p-3`}
      >
        <span className="flex justify-between p-2 mt-5 ">
          <p className="font-light xs:text-sm sm:text-sm md:text-md lg:text-xl capitalize ">
            sub-total
          </p>
          <p className="font-semibold xs:text-sm sm:text-sm md:text-md lg:text-xl ">{`${
            option === "NGN" ? "NGN" : "$"
          } ${
            option === "NGN"
              ? Math.round(currencyData * totalPrice)
              : totalPrice
          } `}</p>
        </span>
        <span className="flex justify-between p-2 mt-3 ">
          <p className="font-light  xs:text-sm sm:text-sm md:text-md lg:text-xl capitalize ">
            discount(-20%)
          </p>
          <p className="font-semibold text-red-600 xs:text-sm sm:text-sm md:text-md lg:text-xl ">
            -
            {`${option === "NGN" ? "NGN" : "$"} ${
              option === "NGN"
                ? Math.round(currencyData * discountPrice)
                : discountPrice.toFixed(2)
            }`}
          </p>
        </span>
        <hr className="border-1 mt-3 w-[90%] block mx-auto border-gray-300" />
        <span className="flex justify-between p-2 mt-5 ">
          <p className="font-semibold  xs:text-sm sm:text-sm md:text-md lg:text-xl capitalize ">
            total
          </p>
          <p className="font-semibold  xs:text-sm sm:text-sm md:text-md lg:text-2xl ">{`${
            option === "NGN" ? "NGN" : "$"
          } ${
            option === "NGN"
              ? Math.round(currencyData * discountPrice)
              : discountPrice.toFixed(2)
          }`}</p>
        </span>
        <Button
          btnText={"checkout"}
          disable={show}
          btnFunction={handleFunction}
          btnClassname={"cart-classname"}
        />
      </div>
    </>
  );
};

export default CartTotal;
