import React from "react";
import { useTheme } from "../config/ThemeContext";
import { useCart } from "../config/CartProvider";
import { toast } from "react-hot-toast";
import flutterwave from "../assets/flutterwave.png";
import { useNavigate } from "react-router-dom";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";
import { useCurrency } from "../config/CurrencyContext";
import { PaystackButton } from "react-paystack";
import Button from "../components/Button";
const AdressComp = ({
  style = true,
  show = true,
  payment = false,
  info,
  handleChange,
  handleSubmit,
  headText,
  disable,
  image = false,
  display = false,
  paystack = false,
  flutter = false,
}) => {
  const { dark } = useTheme();
  const navigate = useNavigate();
  // public key for paystack
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  // price gotten from the cartprovider
  const { total } = useCart();
  const { currencyData, setValue } = useCurrency();
  // destructure the objects for the payment
  const { fullname, email, number } = info;
  const amount = Math.round(1497 * total);
  // public key for flutterwave
  const Flu_publickey = import.meta.env.VITE_FLUTTERWAVE_TEST_PUBLIC_KEY;
  // FOR PAYSTACK PAYMENT INTEGRATION
  const componentProps = {
    email,
    amount: amount * 100,
    currency: "NGN",
    metadata: {
      fullname,
      number,
    },
    publicKey,
    text: "pay with paystack",
    onSuccess: () => {
      setValue(true);
      setTimeout(() => {
        navigate("/paymentpage");
      }, 2000);
    },
    onClose: () =>
      toast.error("payment cancelled", {
        style: {
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "gray",
        },
      }),
  };
  // FOR FLUTTERWAVE PAYMENT INTEGRATION
  const config = {
    public_key: Flu_publickey,
    tx_ref: Date.now(),
    amount: amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email,
      number,
      fullname,
    },
    customizations: {
      title: "Hexashop",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave",
    callback: (response) => {
      if (response.status !== "completed") {
        
        toast.error("payment not successful", {
          style: {
            textTransform: "capitalize",
            fontWeight: "bold",
            color: "gray",
          },
        });
       
      } else {
         setValue(true);
        setTimeout(() => {
          navigate("/paymentpage");
        }, 2000);
      }

      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {
      toast.error("payment cancelled", {
        style: {
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "gray",
        },
      });
      const infos = {
        fullname: "",
        email: "",
        number: "",
      };
    },
  };

  return (
    <div>
      <form
        action=""
        className={`${style ? "md:mt-50 lg:mt-55" : ""} 
         transition-all ease duration-200
         ${dark ? "text-white" : "text-gray-700"}
        mb-2 xs:mx-auto md:mr-2 lg:mr-0 xs:w-[22.5rem] sm:w-[30rem] md:w-[30rem] lg:w-[45rem] sm:py-1 md:py-3 px-6 
           ${payment ? "" : "border-1 border-gray-200"}
         rounded-lg`}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* props head text */}

        <div className="flex flex-col not-only-of-type:justify-center items-center h-15">
          <p
            className={`text-center capitalize font-bold  xs:text-lg sm:text-xl lg:text-2xl p-2 `}
          >
            {headText}
          </p>
          {image ? (
            <img
              src={flutterwave}
              className={` 
               brightness-130 invert-0
               xs:h-10 md:h-11 lg:h-11 xs:w-40 sm:w-40 md:w-45 lg:w-55`}
            />
          ) : (
            ""
          )}
        </div>
         
        {/* condition redering for the labels and information */}
        {!payment ? (
          <div className="flex xs:flex-col sm:flex-row justify-between w-fit pt-1.5">
            {/* for the firstname */}
            <div className="mr-1">
              <label
                htmlFor=""
                className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg "
              >
                firstname
              </label>
              <input
                type="text"
                name="firstname"
                value={info.firstname}
                onChange={handleChange}
                placeholder="enter firstname"
                className={`border-1 placeholder:${
                  dark ? "text-white" : "text-gray-700"
                } capitalize border-gray-300 xs:p-2.5 sm:p-2 rounded-md xs:w-74 sm:w-55 lg:w-80 xs:text-xs md:text-sm lg:text-md `}
              />
            </div>
            {/* for the last name */}
            <div>
              <label
                htmlFor=""
                className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg "
              >
                lastname
              </label>
              <input
                type="text"
                name="lastname"
                value={info.lastname}
                onChange={handleChange}
                placeholder="enter lastname"
                className={`border-1 capitalize placeholder:${
                  dark ? "text-white" : "text-gray-700"
                } border-gray-300 xs:p-2.5 sm:p-2 rounded-md xs:w-74 sm:w-55 lg:w-80 xs:text-xs md:text-sm lg:text-md`}
              />
            </div>
          </div>
        ) : (
          <div className="mx-auto w-fit">
            <label
              htmlFor=""
              className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-md "
            >
              {" "}
              fullname{" "}
            </label>
            <input
              type="text"
              name="fullname"
              value={info.fullname}
              onChange={handleChange}
              placeholder="enter your fullname"
              className={`border-1 capitalize placeholder:${
                dark ? "text-white" : "text-gray-500"
              } border-gray-300 p-2 rounded-md xs:w-75 sm:w-100 lg:w-140 xs:text-xs sm:text-sm lg:text-md`}
            />
          </div>
        )}
        {/* for the email */}
        {payment ? (
          <div className="mx-auto w-fit">
            <label
              htmlFor=""
              className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg"
            >
              email
            </label>
            <input
              type="text"
              name="email"
              value={info.email}
              onChange={handleChange}
              placeholder="enter your email"
              className={`border-1 capitalize  border-gray-300 p-2 rounded-md xs:w-75 sm:w-100 lg:w-140 xs:text-xs sm:text-sm lg:text-md placeholder:${
                dark ? "text-white" : "text-gray-700"
              }`}
            />
          </div>
        ) : (
          ""
        )}
        {/* for the phone number */}
        <div className="flex flex-col xs:ml-0 sm:ml-2 md:ml-4 lg:ml-0 gap-3 mt-5 w-fit">
          <div
            className={`flex xs:w-fit sm:w-fit lg:w-[70%] justify-between items-end ${
              payment ? "mx-auto" : ""
            }`}
          >
            <p className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-xl ">
              +234
            </p>
            <aside className="">
              <label
                htmlFor=""
                className="block p-1 capitalize font-medium xs:text-sm sm:text-md lg:text-lg "
              >
                phone number
              </label>
              <input
                type="text"
                name="number"
                value={info.number}
                onChange={handleChange}
                placeholder="enter your phone number"
                className={`border-1 block capitalize  border-gray-300 xs:p-2.5 sm:p-2 rounded-sm xs:w-65 sm:w-85 xs:text-xs sm:text-sm lg:text-md placeholder:${
                  dark ? "text-white" : "text-gray-700"
                }`}
              />
            </aside>
          </div>
          {/* for the additional phone number */}
          <div>
            {show ? (
              <div className=" mt-3 flex sm:w-fit lg:w-[62%] justify-between items-end">
                <p className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-xl">
                  +234
                </p>
                <aside>
                  <label
                    htmlFor=""
                    className="block p-1 capitalize font-medium xs:text-sm sm:text-md lg:text-lg "
                  >
                    additional phone number
                  </label>
                  <input
                    type="text"
                    name="number_2"
                    value={info.number_2}
                    onChange={handleChange}
                    placeholder="additional phone number"
                    className={`border-1 block capitalize  border-gray-300 xs:p-2.5 sm:p-2 rounded-sm xs:w-65 sm:w-85 xs:text-xs sm:text-sm lg:text-md placeholder:${
                      dark ? "text-white" : "text-gray-700"
                    }`}
                  />
                </aside>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* for the address information */}
        {!payment ? (
          <>
            <label
              htmlFor=""
              className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg"
            >
              delivery address
            </label>
            <input
              type="text"
              name="address"
              placeholder="enter your address"
              value={info.address}
              onChange={handleChange}
              className={`border-1 capitalize  border-gray-300 xs:p-2.5 sm:p-2 md:p-3 rounded-md xs:w-75 sm:w-100 lg:w-120 xs:text-xs sm:text-sm md:text-md placeholder:${
                dark ? "text-white" : "text-gray-700"
              }`}
            />
          </>
        ) : (
          ""
        )}
        {/* for the nationality */}
        {show ? (
          <>
            <label
              htmlFor=""
              className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg"
            >
              {" "}
              your country{" "}
            </label>
            <input
              type="text"
              name="country"
              value={info.country}
              onChange={handleChange}
              placeholder="enter your nationality"
              className={`border-1 capitalize  border-gray-300 p-2 rounded-md xs:w-75 sm:w-100 xs:text-xs sm:text-sm lg:text-lg placeholder:${
                dark ? "text-white" : "text-gray-700"
              }`}
            />
          </>
        ) : (
          ""
        )}
        
        {/* payment amount enter field */}
        {payment ? (
          <>
            <p className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg ">
              amount:
              <span className="font-medium ml-3 xs:text-sm sm:text-md lg:text-lg">{`${"NGN"} ${Math.round(
                1497 * total || currencyData * total
              )}`}</span>
            </p>
          </>
        ) : (
          ""
        )}

        {/* for the submit button */}
        {display && (
          <Button
            btnFunction={handleSubmit}
            btnText={"save"}
            disable={disable}
          />
        )}
        {paystack && (
          <PaystackButton
            className={`
         flex
         justify-self-center
         justify-center
         capitalize
         my-4
         font-bold
         rounded-md
         xs:w-55
         sm:w-65
         md:w-75
         lg:w-85
         p-3
         border-0
         ease
         cursor-pointer
         bg-gray-900
         xs:text-xs
         text-gray-300
         sm:text-sm
         md:text-md
         lg:text-lg
         `}
            {...componentProps}
          />
        )}
        {flutter && (
          <div
            className={`
         flex
         justify-self-center
         justify-center
         capitalize
         my-4
         font-bold
         rounded-md
         xs:w-55
         sm:w-65
         md:w-75
         lg:w-85
         p-3
         border-0
         ease
         cursor-pointer
         bg-gray-900
         xs:text-xs
         text-gray-300
         sm:text-sm
         md:text-md
         lg:text-lg
         transition-all
         ease
         duration-200
         active:scale-95
         `}
          >
            <FlutterWaveButton {...fwConfig} />
          </div>
        )}
      </form>
    </div>
  );
};

export default AdressComp;
