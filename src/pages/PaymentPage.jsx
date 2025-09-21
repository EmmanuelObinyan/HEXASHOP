import React, { useState, useEffect } from "react";
import { MdOutlinePayments } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Button from "../components/Button";
import {useCart} from '../config/CartProvider'
import { FaMinusCircle } from "react-icons/fa";
import {useCurrency} from '../config/CurrencyContext'
import { useAddress } from "../config/AddressContext";
import Checkout from "../components/Checkout";
const PaymentPage = () => {
  const{option,currencyData}=useCurrency()
  const{fee}=useCart()
  const { deliveryAddress, details} = useAddress();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  console.log(selected);
  return (
    <>
      <div
        className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 bg-[cream] `}
      >
        <Link
          className="capitalize font-semibold mb-3 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
          to={"/deliverycheckoutpage"}
        >
          back to checkout
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
        >
          select payment method
        </h2>
        <Checkout />
        {/* for the payment method and delivery */}
        <section className="mt-8 xs:w-[95%] sm:w-[80%] md:w-[70%] mx-auto">
          {deliveryAddress.length >= 1 ? (
            <FaCheckCircle className="text-green-600" />
          ) : (
            <FaMinusCircle className="text-gray-700" />
          )}
          <p className="flex  items-center justify-between xs:text-md sm:text-lg md:text-xl lg:text-2xl font-medium capitalize text-gray-400">
            customer address
            <span
              className=" mr-1 xs:text-xs md:text-sm lg:text-md text-orange-400 font-light cursor-pointer"
              onClick={() => navigate("/addresspage")}
            >
              change
            </span>
          </p>
          {deliveryAddress.map((item, index) => (
            <div
              className=" border-1 border-gray-200 pb-2 xs:h-20 md:h-17 lg:h-18 px-3  bg-gray-50 "
              key={index}
            >
              <p className="capitalize mt-4 mb-2 text-gray-700 font-semibold text-sm">
                {`${item.firstname}  ${item.lastname}`}
              </p>
              {/* the picked customer address */}
              <p className="capitalize font-light text-gray-700 xs:text-xs md:text-sm">
                {`${
                  item.address.length > 30
                    ? item.address.slice(0, 30)
                    : item.address
                }${item.address.length > 30 ? "..." : ""}`}
              </p>
            </div>
          ))}
          {/* for the delivery details */}
          <FaCheckCircle className="text-green-600 xs:mt-6 sm:mt-8 md:mt-10 lg:mt-15" />
          <p className="flex  items-center justify-between xs:text-md sm:text-lg md:text-xl lg:text-2xl font-medium capitalize text-gray-400">
            delivery details
            <span
              className=" mr-1 xs:text-xs md:text-sm lg:text-md text-orange-400 font-light cursor-pointer"
              onClick={() => navigate("/deliverycheckoutpage")}
            >
              change
            </span>
          </p>
          <div className="mt-3 border-1 border-gray-200  lg:h-[7rem] p-2 mb-3 bg-gray-50 ">
            {details.map((item) => (
              <div key={item.id}>
                <p className="capitalize font-medium text-gray-700 py-2 xs:text-sm md:text-md lg:text-lg">
                  {item.method}({`  ${option === "NGN" ? "NGN": "$"} ${option === "NGN" ? Math.round(currencyData * fee):fee}`})
                </p>
                <p className="capitalize text-gray-800 mt-2 font-medium  xs:text-xs md:text-sm lg:text-md">
                  {item.delivery}
                </p>
              </div>
            ))}
          </div>
          {/* for the payment method */}
          <p className="flex  items-center xs:text-lg  md:text-xl lg:text-2xl mt-15 font-medium capitalize text-gray-400">
            payment method
          </p>

          <div className="mt-3  border-1 border-gray-200 lg:h-[5rem] p-2 mb-3 bg-gray-50 ">
            <aside className="flex justify-between items-center xs:w-[85%] sm:w-[65%] md:w-[60%] lg:w-[40%]">
              <select
                name=""
                id=""
                value={selected}
                className="xs:p-2 lg:p-3 xs:w-[75%] sm:w-[70%] md:w-[70%] lg:w-[60%] capitalize text-gray-700 font-semibold xs:text-xs sm:text-sm  lg:text-lg"
                onChange={handleChange}
              >
                <option value={"default payment"}>choose payment method</option>
                <option value="payment on delivery">payment on delivery</option>
                <option value="pay with paystack">
                  pay with paystack
                </option>
              </select>
              <MdOutlinePayments className="xs:text-2xl  md:text-3xl lg:text-5xl text-gray-800 lg:mr-15" />
            </aside>
          </div>
          <Button btnText={"confirm payment"} />
        </section>
      </div>
      <p className="uppercase my-8 text-center text-gray-800 xs:text-xs md:text-sm">
        @hexashop 2025 edition limited
      </p>
    </>
  );
};

export default PaymentPage;
