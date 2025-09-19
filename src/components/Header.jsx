import React from "react";
import { useNavigate } from "react-router-dom";
const Header = ({ ref }) => {
  const navigate = useNavigate();
  return (
    // for the first container
    <div
      className="grid gap-5
     z-0
    justify-self-center 
    md:grid-cols-2
    lg:w-[90%]"
       ref={ref}
   >
      {/* first row of the container */}
      <div
        className='bg-center bg-no-repeat bg-cover
       bg-[linear-gradient(to_left,rgba(0,0,0,0.8),rgba(0,0,0,0.5)),url("/womanlogin.png")] 
       lg:w-[100%] h-[30rem]'
      >
        {/* for the first container text */}
        <h2
          className="w-fit p-2 ml-10 mt-45
                 text-white font-semibold 
                 xs:text-3xl
                 sm:text-4xl
                 md:text-5xl 
                 lg:text-6xl"
        >
          We Are Hexashop
        </h2>
        <p
          className="text-white w-[70%]
                 p-2 ml-10 mb-8 font-light  
                xs:text-xs
                sm:text-sm
                md:text-md
                lg:text-lg"
        >
          one of the best clothing stores to get quality clothes ,trust on that
        </p>
        {/* for the button ,bounce */}
        <div
          className="text-white flex 
                items-center ml-10 
                text-lg font-semibold
                 animate-bounce duration-300 ease-in-out
                w-fit h-10 p-5 capitalize border-2 border-white"
        >
          purchase
        </div>
      </div>
      {/* second row of the container */}
      <div
        className="grid grid-cols-2 text-white gap-3
       lg:w-[100%]"
      >
        {/* for inner containers */}

        {/*first wrapper */}
        <div
          className='bg-cover bg-no-repeat
                xs:pb-1
                bg-center bg-[linear-gradient(to_left,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url("/headerwomenimage.png")]'
        >
          <h2
            className="capitalize 
                     text-center
                     mt-12  
                     p-2
                    font-semibold
                    xs:text-md
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    "
          >
            women
          </h2>
          <p
            className="font-light 
                     text-center
                      p-1 mb-5
                      xs:text-xs 
                     sm:text-sm 
                     md:text-md
                     lg:text-lg"
          >
            check out quality female wears
          </p>
          <span
            className="p-2 mx-auto 
                    block w-fit border-2
                    duration-200 transition-all
                    cursor-pointer
                    capitalize
                    font-semibold
                     active:scale-95
                    border-white"
            onClick={() => navigate("/womenspage")}
          >
            discover more
          </span>
        </div>
        {/* second wrapper */}
        <div
          className='bg-top bg-cover
                 bg-no-repeat 
                 xs:pb-1
                 bg-[linear-gradient(to_left,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url("/headermenimage.png")]'
        >
          <h2
            className="
                    capitalize  
                    p-2 text-center 
                    mt-12  
                    xs:text-md
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    font-semibold"
          >
            men
          </h2>
          <p
            className="font-light 
                    mb-5 
                    text-center p-1
                    xs:text-xs
                    sm:text-sm
                    md:text-md
                    lg:text-lg"
          >
            check out quality male wears
          </p>
          <span
            className="p-2 mx-auto 
                    block w-fit border-2
                    duration-200 transition-all
                    cursor-pointer
                    capitalize
                    font-semibold
                     active:scale-95
                     border-white"
            onClick={() => navigate("/menspage")}
          >
            discover more
          </span>
        </div>
        {/*third wrapper  */}
        <div
          className='bg-cover 
                bg-top bg-no-repeat 
                xs:pb-1
                bg-[linear-gradient(to_left,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url("/headerkidimage.png")]'
        >
          <h2 className="text-xl capitalize p-2 text-center mt-12  font-semibold">
            kids
          </h2>
          <p
            className="font-light 
                    text-center 
                    mb-5 p-1
                    xs:text-xs
                    sm:text-sm
                    md:text-md
                    lg:text-lg"
          >
            check good and quality wears for kids
          </p>
          <span
            className="p-2 mx-auto
                     block w-fit border-2
                     duration-200 transition-all
                    cursor-pointer
                    capitalize
                    font-semibold
                     active:scale-95
                      border-white"
            onClick={() => navigate("/kidspage")}
          >
            discover more
          </span>
        </div>
        {/* fourth wrapper */}
        <div
          className='bg-cover 
                bg-no-repeat bg-center
                xs:pb-1
                 bg-[linear-gradient(to_left,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url("/accessories.png")]'
        >
          <h2 className="text-xl capitalize p-2 text-center mt-12  font-semibold">
            accessories
          </h2>
          <p
            className="font-light 
                    mb-5 
                    text-center 
                    p-1
                    xs:text-xs
                    sm:text-sm
                    md:text-md
                    lg:text-lg"
          >
            provision for accessories will be made avaliable
          </p>
          <span
            className="p-2 mx-auto 
                    block w-fit border-2
                    duration-200 transition-all
                    cursor-pointer
                    capitalize
                    font-semibold
                     active:scale-95
                     border-white"
            onClick={() => navigate("/accessoriespage")}
          >
            discover more
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
