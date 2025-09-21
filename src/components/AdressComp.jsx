import React from "react";
import Button from "../components/Button";
const AdressComp = ({ show = true,info ,handleChange,handleSubmit,disable}) => {
  return (
    <div>
      <form
        action=""
        className={`md:mt-50 lg:mt-55 mb-2 xs:mx-auto md:mr-2 lg:mr-0 xs:w-[22.5rem] sm:w-[30rem] md:w-[30rem] lg:w-[45rem] sm:py-1 md:py-3 px-6 shadow-lg border-1 border-gray-300 rounded-lg`}
      >
        {/* personal information head text */}
        {show ? (
          <p className="text-center capitalize font-semibold text-gray-700 mb-2 xs:text-lg sm:text-xl lg:text-2xl p-2">
            personal information
          </p>
        ) : (
          ""
        )}
        <div className="flex xs:flex-col sm:flex-row justify-between w-fit pt-1.5">
          {/* for the firstname */}
          <div className="mr-1">
            <label
              htmlFor=""
              className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg text-gray-700"
            >
              firstname
            </label>
            <input
              type="text"
              name="firstname"
              value={info.firstname}
              onChange={handleChange}
              placeholder="enter firstname"
              className="border-1 text-gray-800 capitalize border-gray-300 xs:p-2.5 sm:p-2 rounded-md xs:w-74 sm:w-55 lg:w-80 xs:text-xs md:text-sm lg:text-md "
            />
          </div>
          {/* for the last name */}
          <div>
            <label
              htmlFor=""
              className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg text-gray-700"
            >
              lastname
            </label>
            <input
              type="text"
              name="lastname"
              value={info.lastname}
              onChange={handleChange}
              placeholder="enter lastname"
              className="border-1 capitalize text-gray-800 border-gray-300 xs:p-2.5 sm:p-2 rounded-md xs:w-74 sm:w-55 lg:w-80 xs:text-xs md:text-sm lg:text-md"
            />
          </div>
        </div>
        {/* for the phone number */}
        <div className="flex flex-col xs:ml-0 sm:ml-2 md:ml-4 lg:ml-0 gap-3 mt-5 w-fit">
          <div className="flex xs:w-fit sm:w-fit lg:w-[62%] justify-between items-end">
            <p className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-xl text-gray-700">
              +234
            </p>
            <aside className="">
              <label
                htmlFor=""
                className="block p-1 capitalize font-medium xs:text-sm sm:text-md lg:text-lg text-gray-700"
              >
                phone number
              </label>
              <input
                type="text"
                name="number"
                value={info.number}
                onChange={handleChange}
                placeholder="enter your phone number"
                className="border-1 block capitalize text-gray-800 border-gray-300 xs:p-2.5 sm:p-2 rounded-sm xs:w-65 sm:w-85 xs:text-xs sm:text-sm lg:text-md "
              />
            </aside>
          </div>
          {/* for the additional phone number */}
          <div>
            {show ? (
              <div className=" mt-3 flex sm:w-fit lg:w-[62%] justify-between items-end">
                <p className="block p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-xl text-gray-700">
                  +234
                </p>
                <aside>
                  <label
                    htmlFor=""
                    className="block p-1 capitalize font-medium xs:text-sm sm:text-md lg:text-lg text-gray-700"
                  >
                    additional phone number
                  </label>
                  <input
                    type="text"
                    name="number_2"
                    value={info.number_2}
                    onChange={handleChange}
                    placeholder="additional phone number"
                    className="border-1 block capitalize text-gray-800 border-gray-300 xs:p-2.5 sm:p-2 rounded-sm xs:w-65 sm:w-85 xs:text-xs sm:text-sm lg:text-md"
                  />
                </aside>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>

        {/* for the address information */}
        <label
          htmlFor=""
          className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg text-gray-700"
        >
          delivery address
        </label>
        <input
          type="text"
          name="address"
          placeholder="enter your address"
          value={info.address}
          onChange={handleChange}
          className="border-1 capitalize text-gray-800 border-gray-300 xs:p-2.5 sm:p-2 md:p-3 rounded-md xs:w-75 sm:w-100 lg:w-120 xs:text-xs sm:text-sm md:text-md "
        />
        {/* for the nationality */}
         { show? ( <>
        <label
          htmlFor=""
          className="block mt-5 p-2 capitalize font-medium xs:text-sm sm:text-md lg:text-lg text-gray-700"
        > your country </label>
        <input
         type="text"
         name="country"
         value={info.country}
         onChange={handleChange}
          placeholder="enter your nationality"
          className="border-1 capitalize text-gray-800 border-gray-300 p-2 rounded-md xs:w-75 sm:w-100 xs:text-xs sm:text-sm lg:text-lg"
        />
        </>):""}

           

        {/* for the submit button */}
        <Button 
        btnFunction={handleSubmit} 
        btnText={"save"}
         disable={disable}
        />
      </form>
    </div>
  );
};

export default AdressComp;
