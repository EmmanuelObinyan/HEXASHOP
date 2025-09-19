import React from "react";
import Button from "./Button";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

const ContactComp = ({ show = true }) => {
  return (
    <>
      {show ? (
        <div className="p-2 bg-white shadow-black rounded-lg sm:w-fit md:h-[25rem] lg:h-[30rem]">
          <BsFillTelephoneInboundFill className="xs:text-4xl sm:text-5xl md:text-6xl  lg:text-8xl p-2 mx-auto text-gray-900 block mt-12 mb-2 border-1 border-gray-300" />
          <p className="xs:text-center md:text-left xs:text-xl sm:text-2xl lg:text-3xl text-gray-900 capitalize font-semibold mx-auto w-fit py-1 my-2">
            talk to sales
          </p>
          <p className="w-[90%] xs:text-center md:text-left font-medium mx-auto my-3 text-gray-900 xs:text-xs sm:text-sm lg:text-md">
            Have questions about our products or services? Our sales team is
            ready to assist you. Whether its product inquiries, bulk purchases,
            or partnership opportunities, were just a message away. Get in touch
            today and lets make shopping with HEXASHOP easy and seamless for
            you.”
          </p>
          <Button
            btnClassname={"btn-style"}
            btnText={"view all global members"}
          />
        </div>
      ) : (
        <div className="p-2 bg-white shadow-black rounded-lg sm:w-fit md:h-[25rem] lg:h-[30rem]">
          <RiCustomerService2Line className="xs:text-4xl sm:text-5xl md:text-6xl  lg:text-8xl p-2 mx-auto text-gray-900 block mt-12 mb-2 border-1 border-gray-300" />
          <p className="xs:text-xl sm:text-2xl lg:text-3xl text-gray-900 capitalize font-semibold mx-auto w-fit py-1 my-2">
            customer support
          </p>
          <p className="w-[90%] font-medium mx-auto my-3 text-gray-900 xs:text-xs sm:text-sm lg:text-md">
            “We love to hear from you! Whether you need support, have inquiries,
            or simply want to share feedback, our team is here to help. Reach
            out to us anytime, and well respond as quickly as possible.”
          </p>
          <Button btnClassname={"btn-style"} btnText={"customer support"} />
        </div>
      )}
    </>
  );
};

export default ContactComp;
