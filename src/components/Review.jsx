import React from "react";
import {useTheme} from '../config/ThemeContext'
const Review = ({ rating, handleChange, review, handleRating }) => {
   const{dark}=useTheme()
  return (
    <div className={`${dark ? "text-white":"text-gray-700"}`}>
      {/* for the message */}
      <textarea
        name="message"
        value={review}
        onChange={handleChange}
        className="xs:w-[19rem] sm:w-[21rem]  lg:w-[45rem] shadow focus:pl-3 rounded-xl border-1  xs:text-xs sm:text-sm lg:text-lg border-gray-300 xs:h-50  md:h-60 lg:h-70 flex xs:justify-self-center md:justify-self-end "
        id=""
      ></textarea>
      <label
        htmlFor=""
        className="block  mt-2 font-semibold text-right sm:mr-18 md:mr-6 xs:text-xs md:text-sm lg:text-lg"
      >
        write a review
      </label>
      <p className="text-center capitalize  py-2 my-2 xs:text-lg md:text-xl lg:text-2xl font-semibold">
        your rating
      </p>
      {/* for the rating */}
      <select
        name=""
        id=""
        value={rating}
        onChange={handleRating}
        className={`capitalize font-medium py-2 flex justify-self-end xs:text-xs md:text-sm lg:text-lg ${dark ? "bg-[#1A1A1A]":""}`}
      >
        <option value="">choose your rating</option>
        <option value="3.5/5">3.5/5 rating</option>
        <option value="3/5">3/5 rating</option>
        <option value="4/5">4/5 rating</option>
        <option value="4.5/5">4.5/5 rating</option>
        <option value="5/5">5 rating</option>
      </select>
    </div>
  );
};

export default Review;
