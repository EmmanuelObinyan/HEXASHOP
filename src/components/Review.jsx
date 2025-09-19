import React from "react";

const Review = ({ rating, handleChange, review, handleRating }) => {
  return (
    <div>
      {/* for the message */}
      <textarea
        name="message"
        value={review}
        onChange={handleChange}
        className="xs:w-[19rem] sm:w-[21rem]  lg:w-[45rem] shadow focus:pl-3 rounded-xl border-1 text-gray-700 xs:text-xs sm:text-sm lg:text-lg border-gray-300 xs:h-50  md:h-60 lg:h-70 flex xs:justify-self-center md:justify-self-end "
        id=""
      ></textarea>
      <label
        htmlFor=""
        className="block text-gray-700  mt-2 font-semibold text-right sm:mr-18 md:mr-6 xs:text-xs md:text-sm lg:text-lg"
      >
        write a review
      </label>
      <p className="text-center capitalize text-gray-700 py-2 my-2 xs:text-lg md:text-xl lg:text-2xl font-semibold">
        your rating
      </p>
      {/* for the rating */}
      <select
        name=""
        id=""
        value={rating}
        onChange={handleRating}
        className="capitalize font-medium text-gray-700 flex justify-self-end xs:text-xs md:text-sm lg:text-lg"
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
