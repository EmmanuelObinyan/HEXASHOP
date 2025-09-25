import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../config/ThemeContext";
const Form = ({
  btntext,
  data,
  handleChange,
  handleSubmit,
  message,
  textvalue = true,
  handleSignin,
  error,
  value,
  loading,
  btnable,
  handlePassword,
}) => {
  const navigate = useNavigate();
  const { dark } = useTheme();
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={`p-3 
       h-[fit] rounded-[1rem] 
         ${dark ? "text-white shadow-2xl" : "text-gray-700 shadow-black"}
        block mx-auto mt-11 xs:w-[82%] mb-5 sm:mt-9 w-[78%] md:w-[73%] lg:w-[55%] `}
      >
        {/* the details of the form */}
        <h2
          className="capitalize font-bold text-center 
         pb-3 pt-2 md:text-[1.2rem]  :text-[1.5rem]"
        >
          {textvalue ? "create an account" : "login page"}
        </h2>

        <p
          className="text-center font-semibold 
        capitalize pt-2 md:text-[0.9rem]   lg:text-[1.2rem]"
        >
          welcome to{" "}
          <span
            className="font-bold capitalize
         text-blue-700 mx-1"
          >
            {textvalue ? "sign up page" : "login page"}
          </span>
          here
        </p>

        {/* for the message */}
        <p
          className={`my-2 capitalize  font-semibold
        ${
          value ? "text-green-600" : "text-red-600"
        }  md:text-[0.9rem] lg:text-[1.1rem] `}
        >
          {message}
        </p>
        {/* the input fields */}
        <label
          className="block capitalize font-semibold 
         pt-2 w-fit mt-3 ml-4  xs:text-[0.8rem] md:text-[0.9rem] lg:text-[1.2rem]"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="Enter your email address"
          name="email"
          value={data.email}
          onChange={handleChange}
          className={`block mt-2  ml-3  focus:text-gray-700
            placeholder:${
              dark ? "text-white" : "text-gray-700"
            } xs:text-[0.6rem] md:text-[0.8rem]  lg:text-[1rem] 
         rounded-[1rem] mb-3 border-1 border-gray-300 md:w-[95%] xs:p-1.5 lg:p-2 !w-[90%]`}
        />
        {/*the error email*/}
        {error && (
          <p className="text-red-700 capitalize my-2 font-semibold md:text-[0.9rem] lg:text-[1rem]">
            {error.email}
          </p>
        )}

        <label
          htmlFor=""
          className="block capitalize font-semibold
          pt-2 ml-4 w-fit xs:text-[0.8rem] md:text-[0.9rem]  lg:text-[1.2rem]"
        >
          Password
        </label>
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
          className={`block mt-2 mb-4  ml-3
            placeholder:${
              dark ? "text-white" : "text-gray-700"
            } xs:text-[0.6rem] md:text-[0.8rem]  lg:text-[1rem] 
           rounded-[1rem] border-1 border-gray-300  focus:text-gray-700 md:w-[95%] xs:p-1.5 lg:p-2 !w-[90%]`}
        />
        {/* for forgotten password */}
        {!textvalue ? (
          <p
            className={`mt-0 flex justify-self-end mr-10
           mb-4 w-fit font-semibold text-blue-800 xs:text-[0.8rem] md:text-[0.9rem] ${
             error.password ? "hidden" : ""
           } 
           cursor-pointer active:underline `}
            onClick={() => navigate("/forgotten")}
          >
            forgot password
          </p>
        ) : (
          ""
        )}
        {/* error password */}
        {error && (
          <p className="text-red-700 capitalize text-[1rem] font-semibold my-2">
            {error.password}
          </p>
        )}

        {/* for informztion condition*/}
        {textvalue ? (
          <p className="capitalize font-semibold  mx-auto xs:text-[0.8rem] md:text-[0.9rem] w-fit  lg:w-90 text-[1.1rem]">
            if you have an account already{" "}
            <Link to="/login" className="text-blue-700 font-bold">
              login
            </Link>{" "}
            page
          </p>
        ) : (
          <p className="capitalize font-semibold mx-auto xs:text-[0.8rem] md:text-[0.9rem] w-fit  lg:w-100 text-[1.1rem]">
            {" "}
            you dont have an account already{" "}
            <Link to="/signin" className="text-blue-700 font-bold">
              signup
            </Link>{" "}
            page
          </p>
        )}

        {/* for the register button */}
        <button
          className={`p-2 rounded-[1rem] capitalize font-semibold
          flex items-center
          justify-center
         mx-auto mt-7 bg-blue-700
          text-white active:scale-96 
          active:duration-200 
          transition-all ${loading ? "opacity-85" : ""}
           ${
             btnable ? "cursor-not-allowed opacity-90" : ""
           } md:text-[0.9rem] w-[40%] lg:!text-[1.4rem]`}
          disabled={loading ? true : false || btnable ? true : false}
        >
          {/* loading spinner */}
          {loading && (
            <>
              <div className="flex items-center justify-center h-fit mr-2">
                <div class="w-8 h-8 border-4 border-white-600 border-dashed rounded-full animate-spin"></div>
              </div>
            </>
          )}
          {btntext}
        </button>

        {/*for the google signin  */}
        <div
          className="flex items-center p-2 justify-self-center rounded-[0.5rem]
           justify-evenly mt-3 border-1 active:scale-98 transition-slow
           border-gray-200 mb-4 xs:w-[65%] md:w-[57%] lg:w-[55%]"
          onClick={handleSignin}
        >
          <p className=" cursor-pointer capitalize font-semibold xs:text-[0.7rem] md:text-[0.8rem] lg:text-[1.1rem]">
            continue with
          </p>
          {/* tailwind styles */}
          <span className="w-18  flex justify-around cursor-pointer">
            <span className="text-blue-600 font-bold  uppercase xs:text-sm md:text-md lg:text-lg">
              g
            </span>
            <span className="text-red-600   font-bold lowercase xs:text-sm md:text-md lg:text-lg">
              o
            </span>
            <span className="text-yellow-500  font-bold lowercase xs:text-sm md:text-md lg:text-lg">
              o
            </span>
            <span className="text-blue-600  font-bold lowercase xs:text-sm md:text-md lg:text-lg">
              g
            </span>
            <span className="text-green-700   font-bold lowercase xs:text-sm md:text-md lg:text-lg">
              l
            </span>
            <span className="text-red-600  font-bold lowercase xs:text-sm md:text-md lg:text-lg">
              e
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Form;
