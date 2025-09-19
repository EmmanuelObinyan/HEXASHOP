import React from "react";
import { useNavigate } from "react-router-dom";
const CategoryComp = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="flex ">
      {data.slice(0, 5).map((item) => (
        <div
          className={`flex flex-col
          text-white
          relative
          mx-3
          border-0
          shadow-black
          rounded-lg
            bg-[linear-gradient(to_left,rgba(0,0,0,0.9),rgba(0,0,0,0.5)),url(${item.image} )]
                items-center
                pb-7
                 w-full object-cover object-center  rounded-tl-xl  h-fit
                 xs:w-60 sm:w-70  lg:w-90
                 `}
          key={item.id}
        >
          {/* category image */}
          <img
            src={item.image}
            alt=""
            className="h-fit absolute object-cover -z-1"
          />

          <p
            className="font-semibold
                     text-center
                      p-1
                       mt-20
                       mb-4
                      xs:text-sm
                     md:text-md
                     lg:text-lg"
          >
            {item.name}
          </p>
          <span
            className="p-2 mx-auto 
                    block w-fit border-2
                    duration-200 transition-all
                    cursor-pointer
                    capitalize
                     xs:text-sm
                     sm:text-sm 
                     md:text-md
                     lg:text-lg
                    font-semibold
                     active:scale-95
                    border-white"
            onClick={() => navigate("/accessoriespage")}
          >
            discover more
          </span>
        </div>
      ))}
    </div>
  );
};

export default CategoryComp;
