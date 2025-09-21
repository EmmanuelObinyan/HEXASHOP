import React from "react";

const Button = ({ disable, btnFunction, btnClassname, btnText }) => {
  return (
    <button
      className={`
         flex
         justify-self-center
         justify-center
         capitalize
         my-4
         font-bold
         rounded-xl
         xs:w-35
         sm:w-40
         md:w-45
         lg:w-50
         p-3
         ${disable ? "opacity-90 pointer-events-none" : ""}
         border-0
         transition-all
         ease
         duration-300
         active:scale-95
         cursor-pointer
         bg-gray-800
         xs:text-xs
         text-gray-300
         sm:text-sm
         md:text-md
         lg:text-lg
         ${btnClassname}`}
      onClick={btnFunction}
    >
      {btnText}
    </button>
  );
};

export default Button;
