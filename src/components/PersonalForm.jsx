import React from 'react'
import Button from './Button'
import { useTheme } from '../config/ThemeContext'
const PersonalForm = ({handleChange,data,show=true,headText,handleSubmit}) => {
    const{dark}=useTheme()
  return (
    <div>
        <form
        action=""
        className={`
          
         transition-all ease duration-200
         ${dark ? "text-white" : "text-gray-700"}
        mb-2 xs:-ml-18 sm:mx-auto md:mr-2 lg:mr-3 xs:w-[20rem] sm:w-[25rem] md:w-[25rem] lg:w-[42rem] sm:py-1 md:py-3 px-6 
           ${show ? "" : "border-1 border-gray-200"}
         rounded-lg m`}
        onSubmit={(e) => e.preventDefault()}
      >
        {/* props head text */}

        <div className="flex flex-col not-only-of-type:justify-center items-center h-15">
          <p
            className={`text-center capitalize font-bold  xs:text-sm sm:text-md lg:text-xl p-2 `}
          >
            {headText}
          </p>
          
        </div>
          <div className="mx-auto w-fit">
            <label
              htmlFor=""
              className="block mt-5 p-2 capitalize font-medium  xs:text-xs md:text-md lg:text-lg "
            >
              {" "}
              fullname{" "}
            </label>
            <input
              type="text"
              name="fullname"
              value={data.fullname}
              onChange={handleChange}
              placeholder="enter your fullname"
              className={`border-1 capitalize placeholder:${
                dark ? "text-white" : "text-gray-500"
              } border-gray-300 p-2 rounded-md xs:w-70  sm:w-90 lg:w-140 xs:text-xs md:text-sm lg:text-md`}
            />
          </div>
        
      
        {/* for the phone number */}
        <div className="flex flex-col xs:ml-0 sm:ml-2 md:ml-4 lg:ml-0 gap-3 mt-5 w-fit">
          <div
            className={`flex xs:w-fit sm:w-fit lg:w-[70%] justify-between items-end ${
              show ? "mx-auto" : ""
            }`}
          >
            <p className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg ">
              +234
            </p>
            <aside className="">
              <label
                htmlFor=""
                className="block p-1 capitalize font-medium xs:text-sm sm:text-md lg:text-lg "
              >
                phone number
              </label>
              <input
                type="text"
                name="number"
                value={data.number}
                onChange={handleChange}
                placeholder="enter your phone number"
                className={`border-1 block capitalize  border-gray-300 xs:p-2.5 sm:p-2 rounded-sm xs:w-60 sm:w-70 lg:w-85 xs:text-xs md:text-sm lg:text-md placeholder:${
                  dark ? "text-white" : "text-gray-700"
                }`}
              />
            </aside>
          </div>
        </div>

        
        {/* for the nationality */}
        
          <div className="mx-auto w-fit">
            <label
              htmlFor=""
              className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg"
            >
              country
            </label>
            <input
              type="text"
              name="country"
              value={data.country}
              onChange={handleChange}
              placeholder="enter your country name"
              className={`border-1 capitalize  border-gray-300 p-2 rounded-md xs:w-70  sm:w-90 lg:w-140 xs:text-xs md:text-sm lg:text-md placeholder:${
                dark ? "text-white" : "text-gray-700"
              }`}
            />
          </div>
        {/* for state */}
        
             <div className="mx-auto w-fit">
            <label
              htmlFor=""
              className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg"
            >
              state
            </label>
            <input
              type="text"
              name="state"
              value={data.state}
              onChange={handleChange}
              placeholder="your state of origin"
              className={`border-1 capitalize  border-gray-300 p-2 rounded-md xs:w-70  sm:w-90 lg:w-140 xs:text-xs md:text-sm lg:text-md placeholder:${
                dark ? "text-white" : "text-gray-700"
              }`}
            />
          </div>
             <Button
             btnFunction={handleSubmit}
              btnText={"save"}
             />
            </form>
    </div>
  )
}

export default PersonalForm