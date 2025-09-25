import React from "react";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import { MdContactPhone } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import { FcFaq } from "react-icons/fc";
import Footer from "../components/Footer";
import LoadingComp from "../components/LoadingComp";
import { Link } from "react-router-dom";
import { useCurrency } from "../config/CurrencyContext";
import { Toaster } from "react-hot-toast";
import { useTheme } from "../config/ThemeContext";
import firstlogo from "../assets/firstlogoimage.png";
const Preference = () => {
  const { setOption, option, loading, error } = useCurrency();
  const { setSelected, selected, dark } = useTheme();
  // array for the darkmode classes
  const themeArray = [
    {
      id: 1,
      text: "light mode",
      image: firstlogo,
    },
    {
      id: 2,
      text: "dark mode",
      image: firstlogo,
    },
  ];
  // to read data value froms the radio buttons
  const handleRead = (e) => {
    const themeId = Number(e.target.value);
    const findItem = themeArray.find((item) => item.id === themeId);
    setSelected(findItem);
  };
  // handle currency change
  const handleChange = (e) => {
    setOption(e.target.value);
  };
  //  for the error

  return (
    <div
      className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 transition-all ease-in-out duration-300 ${
              dark ? "bg-[#1A1D28] text-white" : "bg-[white] text-gray-700"
            } `}
    >
      {error ? <Toaster /> : ""}
      {/* for loading state */}
      {loading ? <LoadingComp /> : ""}
      <h2
        className="mt-8
           text-left
           lg:ml-[20%]
           md:ml-[15%]
           sm:ml-[13%]
           xs:ml-[9%]
           uppercase pb-3 
           font-bold
          xs:text-md
            sm:text-xl
            lg:text-2xl
          "
      >
        theme/global preference
      </h2>
      <p className="capitalize font-semibold mt-2 w-fit xs:ml-[9%] sm:ml-[13%] md:ml-[15%] lg:ml-[20%]  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400">
        customize your view according to your preference
      </p>
      <section className="flex ">
        <div className="border-r-1 md:mt-3 border-[cream] sm:w-[27%] md:w-[20%] sm:h-[35rem] md:h-[40rem]">
          <Link
            className="capitalize  block font-semibold my-5 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
            to={"/settingspage"}
          >
            back to settings
          </Link>
          <Link
            className="capitalize flex items-center font-semibold my-7 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
            to={"/personalpage"}
          >
            <BsFillPersonVcardFill className="w-fit  xs:h-5 md:h-6 lg:h-8 mr-1" />
            personal nformation
          </Link>

            <Link
            className="capitalize flex items-center font-semibold my-7 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
            to={"/helppage"}
          >
            <FiHelpCircle className="w-fit  xs:h-5 md:h-6 lg:h-8 mr-1" />
            help
          </Link>

          <Link
            className="capitalize flex items-center font-semibold my-7 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
            to={"/aboutpage"}
          >
            <FcAbout className="w-fit xs:h-5 md:h-6 lg:h-8 mr-1" />
            about us
          </Link>

          <Link
            className="capitalize flex items-center font-semibold my-7 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
            to={"/contactpage"}
          >
            <MdContactPhone className="w-fit xs:h-5  md:h-6 lg:h-8 mr-1" />
            contact & services
          </Link>
          <Link
            className="capitalize flex items-center font-semibold my-7 w-fit ml-4  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 active:text-orange-400"
            to={"/faqpage"}
          >
            <FcFaq className="w-fit xs:h-5 md:h-6 lg:h-8 mr-1" />
            frequently asked question
          </Link>
        </div>
        {/* theme preference and global preference */}
        <div className="sm:w-[70%] md:w-[80%] lg:w-full">
          {/* theme preference */}
          <div className="flex justify-self-center justify-between mt-15 xs:h-[25rem] sm:h-[30rem] md:h-[15rem] lg:h-[20rem] xs:w-[11rem] sm:w-[20rem] md:w-[35rem] lg:w-[60rem] xs:flex-col md:flex-row">
            {themeArray.map((item) => (
              <aside
                className="sm:w-[full] md:w-[40%] lg:w-[45%]  rounded-xl shadow-lg border-[2%]"
                key={item.id}
              >
                {/* image */}
                <div
                  className={`xs:h-[9rem] ${
                    item.text === "dark mode" ? "bg-[#1A1D24]" : ""
                  } md:h-[12rem] lg:h-[16.9rem] flex items-center justify-center ${
                    item.text === "light mode" && dark ? "bg-[#FFFFFF] " : ""
                  } `}
                >
                  <img
                    src={item.image}
                    className={`xs:w-[15%] ${
                      item.text === "dark mode" ? "brightness-90 invert" : ""
                    } sm:w-[12%] md:w-[15%] lg:w-[20%]  `}
                    alt=""
                  />
                </div>
                {/* input field */}
                <figure className="flex py-2 justify-around">
                  <p className="capitalize xs:text-xs sm:text-sm md:text-md lg:text-lg   font-semibold ">
                    {item.text}
                  </p>
                  <input
                    type="radio"
                    name="item"
                    value={item.id}
                    onChange={handleRead}
                    checked={selected?.id === item.id}
                    className="xs:w-5 md:w-6 lg:w-7"
                    id=""
                  />
                </figure>
              </aside>
            ))}
          </div>
          {/* global currency preference */}
          <h2
            className="mt-10
           text-left
           lg:ml-[5%]
           md:ml-[4%]
           xs:ml-[2%]
           uppercase pb-3 
           font-bold
          
          xs:text-md
            sm:text-xl
            lg:text-2xl
          "
          >
            global preference
          </h2>
          <p className="capitalize font-semibold mt-2 w-fit xs:ml-[2%] md:ml-[4%] lg:ml-[5%]  xs:text-xs sm:text-md lg:text-lg transition-all ease duration-200 ">
            customize your currency type to your preference
          </p>
          {/* for the global preference select */}
          <aside className="flex  xs:mt-12 sm:mt-15 xs:ml-[2%]  md:ml-[4%] lg:ml-[5%] xs:w-[85%] sm:w-[65%] md:w-[60%] lg:w-[40%] xs:mb-20 sm:mb-19 md:mb-0">
            <select
              name="currency"
              id="currency"
              value={option}
              className={`${
                dark ? "bg-[#1A1D25]" : ""
              } xs:p-2 lg:p-3 xs:w-[90%] sm:w-[70%] md:w-[60%] lg:w-[60%] capitalize  font-semibold xs:text-xs sm:text-sm  lg:text-lg `}
              onChange={handleChange}
            >
              <option value="USD">USD (United State dollar)</option>
              <option value="NGN">NGN (Nigeria Naira)</option>
            </select>
          </aside>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Preference;
