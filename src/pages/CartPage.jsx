import React from "react";
import { useState } from "react";
import Nav from "../components/Nav";
import { MdRemoveShoppingCart } from "react-icons/md";
import CartProduct from "../components/CartProduct";
import Footer from "../components/Footer";
import { toast, Toaster } from "react-hot-toast";
import LoadingComp from "../components/LoadingComp";
import Marquee from "react-fast-marquee";
import { useAuth } from "../config/AuthContext";
import { useCart } from "../config/CartProvider";
import { Link, useNavigate } from "react-router-dom";
import CartTotal from "../components/CartTotal";
import { useTheme } from "../config/ThemeContext";
import CategoryComp from "../components/CategoryComp";
const CartPage = () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const { scrollRef, cart, categories, loading } = useCart();
  const { dark } = useTheme();
  const { user } = useAuth();
  const handleFunction = () => {
    if (!user) {
      toast.error("sign in to checkout products", {
        style: {
          textTransform: "capitalize",
          fontWeight:"bold",
          color: "gray",
        },
      });
      setDisable(true);
    } else {
      navigate("/deliverycheckoutpage");
    }
    setTimeout(() => {
      setDisable(false);
    }, 6000);
    if(loading)
      return <LoadingComp/>
    
  };
  return (
    <>
      <Nav /> 
      <Toaster />
      <div
        className={`xs:mt-22 transition-all ease duration-200
                 ${dark ? "text-white" : "text-gray-700"}
                sm:mt-25 md:mt-27  ${dark ? "bg-[#1A1D29]" : "bg-[cream]"}}`}
      >
        <p
          className="capitalize font-medium mb-3  w-fit ml-4  xs:text-sm sm:text-md"
          ref={scrollRef}
        >
          {"homepage > cart"}
        </p>
        <p className="capitalize font-bold my-4 sm:text-lg md:text-2xl lg:text-4xl ml-7">
          your cart
        </p>
        {cart.length > 0 ? (
          <div className="grid w-[95%] h-fit items-center place-self-center xs:grid-cold-1 sm:grid-cols-2">
            <div className="h-fit">
              <CartProduct />
            </div>
            <div className="">
              <CartTotal
               show={disable}
              handleFunction={handleFunction} />
            </div>
          </div>
        ) : (
          // for the empty cart
          <div
            className={`xs:h-[25rem] sm:h-[35rem] w-[95%] ${
              dark ? "bg-[#1A1D24]" : "bg-gray-100"
            } flex flex-col items-center justify-center place-self-center mx-auto`}
          >
            <MdRemoveShoppingCart className="xs:text-sm sm:text-lg md:text-xl lg:text-3xl h-fit xs:w-20 sm:w-30 md:w-40 opacity-30" />
            <p className="text-gray-400 capitalize font-semibold mt-5 xs:text-md sm:text-2xl md:text-4xl lg:text-5xl">
              cart is empty
            </p>
          </div>
          //
        )}
        {/* for the browse all product */}
        {cart.length > 0 ? (
          <>
            <h2
              className="mt-8
           text-center 
           border-b-1
           border-gray-300
           shadow
           uppercase pb-3 
           font-bold
             
          xs:text-xl
            sm:text-2xl
            lg:text-3xl
          "
            >
              you may also like
            </h2>
            <p
              className="mt-15 text-left 
           border-b-1
           border-gray-300
           shadow
           uppercase pb-3 
           ml-5 
           font-bold
            
          xs:text-lg
            sm:text-xl
            lg:text-2xl
          "
            >
              categories for accessories
            </p>
            <Marquee className="mt-7 mb-3" pauseOnClick pauseOnHover>
              <div className="flex ">
                <CategoryComp data={categories} />
              </div>
            </Marquee>
          </>
        ) : (
          <ul className="flex capitalize p-2  mt-6 sm:ml-7 md:ml-8.5 lg:ml-10">
            <Link to="/accessoriespage">
              <li className="font-semibold  mr-4 transition-all ease duration-150 xs:text-xs sm:text-sm md:text-md lg:text-lg active:text-orange-500 ">
                browse other products
              </li>
            </Link>
            <Link to="/womenspage">
              <li className="font-semibold  mr-4 transition-all ease duration-150 xs:text-xs sm:text-sm md:text-md lg:text-lg active:text-orange-500 ">
                Women's Fashion
              </li>
            </Link>
            <Link to="/menspage">
              <li className="font-semibold  mr-4 transition-all ease duration-150 xs:text-xs sm:text-sm md:text-md lg:text-lg active:text-orange-500">
                Men's Fashion
              </li>
            </Link>
            <Link to="/kidspage">
              <li className="font-semibold  mr-4 transition-all ease duration-150 xs:text-xs sm:text-sm md:text-md lg:text-lg active:text-orange-500 ">
                Kids' Fashion
              </li>
            </Link>
          </ul>
        )}
        <Footer />
      </div>
    </>
  );
};

export default CartPage;
