import React from "react";
import Button from "./Button";
const FaqComp = ({title,text,btnText}) => {
  return (
    <div className="p-2 bg-white shadow-black rounded-lg sm:w-fit md:h-[15rem] lg:h-[18rem]">
      <p className="xs:text-center md:text-left xs:text-lg sm:text-xl lg:text-2xl text-gray-900 capitalize font-semibold mx-auto w-fit py-1 my-2">
        {title}
      </p>
      <p className="w-[90%] xs:text-center md:text-left font-medium mx-auto my-4 text-gray-900 xs:text-xs sm:text-sm lg:text-md">
        {text}
      </p>
      <Button btnClassname={"btn-style"} btnText={btnText} />
    </div>
  );
};

export default FaqComp;
