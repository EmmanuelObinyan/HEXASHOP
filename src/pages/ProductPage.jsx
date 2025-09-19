import React from "react";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import { ReviewPost } from "../Reviewarray";
import { FaRegStarHalf } from "react-icons/fa";
import { useCart } from "../config/CartProvider";
import { MdOutlineCancel } from "react-icons/md";
import Button from "../components/Button";
import { HiEmojiSad } from 'react-icons/hi';
import Footer from "../components/Footer";
import { toast, Toaster } from "react-hot-toast";
import { useAuth } from "../config/AuthContext";
import { FaRegStar } from "react-icons/fa";
import Nav from "../components/Nav";
import Review from "../components/Review";
const ProductPage = () => {
  const { user } = useAuth();
  // for the global state for the cart
  const [rating, setRating] = useState("");
  const { productCart, removeProduct,scrollRef,handleCart } = useCart();
  const [value, setValue] = useState(false);
  const [info, setInfo] = useState(() => {
    const saved = localStorage.getItem("saved");
    return saved ? JSON.parse(saved) : ReviewPost ;
  });
  const [review, setReview] = useState("");

  // for the review
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = false;
    if (review.trim() === "") {
      isValid = true;
      toast.error("Field is required");
     
      setTimeout(() => {
        setReview("");
        setRating("");
      }, 2000);
    }
    if (rating.trim() === "") {
      isValid = true;
      toast.error("Rating field is required");
      setTimeout(() => {
        setReview("");
        setRating("");
      }, 2000);
    }
    if (!isValid)
      if (user) {
        {
          const object = {
            name: user.displayName || user.email,
            title: review,
            rating: rating,
          };
          setInfo([...info, object]);
          toast.success("Review added successfully");
          setReview("");
          setRating("");
        }
      } else {
        setValue(true);
        toast.error("Sign in first!!");
        setReview("");
        setRating("");
        setTimeout(() => {
          setValue(false);
        }, 5000);
      }
  };
  useEffect(() => {
    localStorage.setItem("saved", JSON.stringify(info));
  }, [info]);

  return (
    <>
      <Nav />
      <div
        className={` xs:mt-22  sm:mt-25 md:mt-25 lg:mt-29  ${
          productCart.length === 0 ? "bg-gray-100" : "bg-[#FFFFF]"
        }`}
      >
         <p className="capitalize font-medium mb-3  w-fit ml-4 text-gray-700 xs:text-sm sm:text-md" ref={scrollRef}>
          {"homepage > productpage"}
        </p>
        <Toaster />
        {productCart.map((product) => (
          <div
            className="place-self-center py-2 mb-3 rounded-md grid md:grid-cols-2 xs:w-[90%] sm:w-[68%] md:w-[70%]lg:w-[90%] "
            key={product.id}
          >
            <img
              src={product.image}
              className="mx-auto mt-3 xs:w-[44%] sm:w-[45%] md:w-[75%] lg:w-[50%]  rounded-xl "
              alt=""
            />

            {/*for the product details  */}
            <div className="relative">
              <MdOutlineCancel
                className="absolute right-3 top-2 xs:text-xl   lg:text-3xl
                             font-bold text-gray-700 "
                onClick={() => removeProduct(product.id)}
              />
              <p className=" ml-2 mt-6 text-gray-700  border-b-1 border-gray-300 mb-2 py-2 font-bold capitalize xs:text-center md:text-left sm:text-xl md:text-2xl lg:text-3xl">
                {product.name || product.title}
              </p>

              {/* condition rendering for the rating */}
              {product.rating === "4.5/5" && (
                <span className="flex ml-2 items-center justify-around mb-4 xs:justify-self-center md:justify-self-start  xs:w-[24%] md:w-[26%]">
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStarHalf className="text-yellow-400 text-lg" />
                  <p className="font-medium text-gray-800 xs:text-sm sm:text-md md:text-lg lg:text-xl">
                    {product.rating}
                  </p>
                </span>
              )}
              {product.rating === "5/5" && (
                <span className="flex ml-2 items-center justify-around xs:justify-self-center md:justify-self-start mb-1  xs:w-[24%] md:w-[26%]">
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <p className="font-medium text-gray-800 xs:text-sm sm:text-md md:text-lg lg:text-xl">
                    {product.rating}
                  </p>
                </span>
              )}
              {product.rating === "4/5" && (
                <span className="flex ml-2 items-center justify-around xs:justify-self-center md:justify-self-start mb-1  xs:w-[24%]  lg:w-[26%]">
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <FaRegStar className="text-yellow-400 text-lg" />
                  <p className="font-medium text-gray-800 xs:text-sm sm:text-md md:text-lg lg:text-xl">
                    {product.rating}
                  </p>
                </span>
              )}

              <p className="ml-2 text-gray-700 py-4  border-b-1 xs:text-center md:text-left border-gray-300 font-semibold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
                ${product.price}
              </p>
              <p className=" xs:text-center md:text-left xs:text-xs sm:text-sm md:text-md  lg:text-lg text-gray-700 py-2">
                {product.description}
              </p>
              {/* add to cart button */}
              <Button
                btnText={"proceed to cart"}
                btnFunction={()=>handleCart(product)}
                btnClassname={"product-classname"}
              />
            </div>
          </div>
        ))}

        {/* for the review */}
        {productCart.length !== 0 ? (
          <div className="mt-4 xs:w-[83%] sm:w-[80%] md:w-[90%] py-2 place-self-center grid xs:grid-cols-1 md:grid-cols-2">
            <div className="border-0 ">
              <Marquee className="sm:mt-0 md:mt-30" pauseOnClick pauseOnHover>
                {info.map((item, index) => (
                  <section
                    key={index}
                    className="p-1 mr-4 xs:w-60 sm:w-70  lg:w-90 h-fit rounded-xl shadow-black"
                  >
                    <p className="py-1 text-gray-700 capitalize font-semibold xs:text-xs sm:text-sm lg:text-lg">
                      {item.name}
                    </p>
                    <p className="text-gray-700 py-2 mb-2 italic font-light xs:text-xs sm:text-sm  lg:text-lg">
                      {item.title}
                    </p>
                    {item.rating === "4.5/5" && (
                      <span className="flex ml-2 items-center justify-around mb-4 xs:justify-self-center md:justify-self-start  xs:w-[36%]  md:w-[37%]">
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStarHalf className="text-yellow-400 text-lg" />
                        <p className="font-medium text-gray-800 xs:text-sm sm:text-md  lg:text-lg">
                          {item.rating}
                        </p>
                      </span>
                    )}
                    {item.rating === "5/5" && (
                      <span className="flex ml-2 items-center justify-around xs:justify-self-center md:justify-self-start mb-1  xs:w-[33%] md:w-[35%]">
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <p className="font-medium text-gray-800 xs:text-sm sm:text-md md:text-md lg:text-lg">
                          {item.rating}
                        </p>
                      </span>
                    )}
                    {item.rating === "3.5/5" && (
                      <span className="flex ml-2 items-center justify-around mb-4 xs:justify-self-center md:justify-self-start  xs:w-[28%] md:w-[35%]">
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStarHalf className="text-yellow-400 text-lg" />
                        <p className="font-medium text-gray-800 xs:text-sm sm:text-md md:text-md lg:text-lg">
                          {item.rating}
                        </p>
                      </span>
                    )}
                    {item.rating === "3/5" && (
                      <span className="flex ml-2 items-center justify-around mb-4 xs:justify-self-center md:justify-self-start  xs:w-[28%] md:w-[30%]">
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <p className="font-medium text-gray-800 xs:text-sm sm:text-md md:text-md lg:text-lg">
                          {item.rating}
                        </p>
                      </span>
                    )}
                    {item.rating === "4/5" && (
                      <span className="flex ml-2 items-center justify-around xs:justify-self-center md:justify-self-start mb-1  xs:w-[26%]  lg:w-[30%]">
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <FaRegStar className="text-yellow-400 text-lg" />
                        <p className="font-medium text-gray-800 xs:text-sm sm:text-md md:text-md lg:text-lg">
                          {item.rating}
                        </p>
                      </span>
                    )}
                  </section>
                ))}
              </Marquee>
            </div>
            <div>
              <p className="md:text-xl lg:text-2xl font-semibold text-center p-2 capitalize text-gray-700 ">
                write a review and pick a rating
              </p>
              <Review
                handleChange={(e) => setReview(e.target.value)}
                review={review}
                rating={rating}
                handleRating={(e) => setRating(e.target.value)}
              />
              <Button
                btnFunction={handleSubmit}
                btnText={"post review"}
                disable={value}
              />
            </div>
          </div>
        ) : (
          <div
            className="flex 
        justify-self-center
         p-3 h-[35rem]  "
          >
            <HiEmojiSad className="text-gray-400 xs:text-6xl sm:text-8xl  lg:text-9xl xs:mt-55 sm:mt-50 mr-4" />
            <p
              className="w-fit mt-60 capitalize 
            font-medium
             text-gray-500 
             xs:text-2xl 
            text-center 
            sm:text-3xl 
            md:text-4xl 
            lg:text-5xl"
            >
              no products added
            </p>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default ProductPage;
