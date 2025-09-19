import React from "react";

const AboutComp = ({ cardClassname, cardText, cardTitle }) => {
  return (
    <div
      className={`shadow-black mb-4   py-2 px-3 bg-[#FFA92E] ${cardClassname} md:h-fit lg:h-70 md:w-[25rem] lg:w-[50rem]`}
    >
      <p className="capitalize  py-1 font-semibold  text-gray-900 xs:text-xl xs:text-center md:text-left text-2xl  lg:text-3xl">
        {cardTitle}
      </p>
      <p className="text-gray-900 py-2  italic xs:text-xs sm:text-sm md:text-sm lg:text-lg">{cardText}</p>
    </div>
  );n
};

export default AboutComp;
