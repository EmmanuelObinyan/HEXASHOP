import React from "react";
import aboutimg from "../assets/peoplewalkingimage.png";
const AboutPic = () => {
  return (
    <div className="md:h-110 lg:h-130 sm:w-80 lg:w-90 p-2 bg-white flex flex-col justify-self-center justify-between">
      <p className="xs:text-center xs:text-xl sm:text-2xl lg:text-3xl ml-2 font-semibold py-2 text-gray-900 capitalize">
        target market summary
      </p>
      <img src={aboutimg} className="w-fit" alt="" />
    </div>
  );
};

export default AboutPic;
