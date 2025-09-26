import React from "react";
import { useNavigate } from "react-router-dom";
// for the security comp
import { MdOutlineSecurity } from "react-icons/md";
// for the personal info
import { BsFillPersonVcardFill } from "react-icons/bs";
// for the payment comp
import { MdPayment } from "react-icons/md";
// for the notification
import { AiTwotoneNotification } from "react-icons/ai";
// for the global preference
import { FaToggleOn } from "react-icons/fa";
// for the shipping
import { MdOutlineLocalShipping } from "react-icons/md";
// about us
import { FcAbout } from "react-icons/fc";
// help
import { FiHelpCircle } from "react-icons/fi";
// contact us
import { MdContactPhone } from "react-icons/md";
// for orders
import { FaCartArrowDown } from 'react-icons/fa';
import { useTheme } from "../config/ThemeContext";

const SettingsCard = ({ show = 1, title, text, navigation }) => {
  const navigate = useNavigate();
  const{dark}=useTheme()
  return (
    <div
      className={`xs:mx-auto sm:mx-0 xs:w-87 sm:w-65  lg:w-95  xs:h-45 sm:h-55 transition-all ease-in-out duration-200 ${dark ? "text-white border-gray-500":"text-gray-800 border-gray-300"} border-1  rounded-xl m-4 p-4 transition-all ease active:scale-95`}
      onClick={() => navigate(`${navigation}`)}
    >
      {/* for the personal info */}
      {show === 1 && (
        <BsFillPersonVcardFill className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* login and security */}
      {show === 2 && (
        <MdOutlineSecurity className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* payment */}
      {show === 3 && (
        <MdPayment className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* for the notification */}
      {show === 4 && (
        <AiTwotoneNotification className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* global preference */}
      {show === 5 && (
        <FaToggleOn className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* shipping address */}
      {show === 6 && (
        <MdOutlineLocalShipping className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* about us */}
      {show === 7 && (
        <FcAbout className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* contact us */}
      {show === 8 && (
        <MdContactPhone className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* help us */}
      {show === 9 && (
        <FiHelpCircle className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      {/* orders */}
      {show === 10 && (
        <FaCartArrowDown className="xs:text-3xl sm:text-3xl md:text-4xl lg:text-5xl  mb-2 w-[20%]" />
      )}
      <p className="font-semibold capitalize mb-2 p-2 xs:text-lg sm:text-xl lg:text-2xl">
        {title}
      </p>
      <p className="xs:text-xs sm:text-sm lg:text-md">{text}</p>
    </div>
  );
};

export default SettingsCard;
