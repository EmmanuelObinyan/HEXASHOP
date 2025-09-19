import React from "react";
import { useAuth } from "../config/AuthContext";
import SettingsCard from "./SettingsCard";
import { Link } from "react-router-dom";
import { useCart } from "../config/CartProvider";
const Settingspage = () => {
  const { scrollRef } = useCart();
  const { user } = useAuth();
  return (
    <>
      {/* <Nav /> */}
      <div
        className={`xs:mt-3 
            sm:mt-3 md:mt-4 lg:mt-5 `}
      >
        <Link
          className="capitalize font-semibold mb-3 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
          to={"/"}
        >
          back to home
        </Link>
        {/*  for the username and email */}

        {user ? (
          <p className="capitalize font-medium mt-5 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md">
            welcome {user.displayName || ""},
            <span className="capitalize font-bold  w-fit ml-2 text-gray-700 xs:text-md sm:text-lg">
              {user.email}
            </span>
          </p>
        ) : (
          <p className="capitalize font-medium mt-5 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md">
            welcome guest user,
            <span className="capitalize font-bold  w-fit ml-2 text-gray-700 xs:text-md sm:text-lg"></span>
          </p>
        )}
        <h2
          className="mt-4
           text-center 
           uppercase pb-3 
           font-bold
            text-gray-700 
          xs:text-xl
            sm:text-2xl
            lg:text-3xl
          "
          ref={scrollRef}
        >
          settings
        </h2>
        <div className="grid place-items-center sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4">
          <SettingsCard
            title={"personal information"}
            text={"Provide personal details and how we can reach you"}
            navigation={"/personalpage"}
          />
          <SettingsCard
            title={"login & security"}
            show={2}
            text={"update your password and secure your account"}
          />
          <SettingsCard
            title={"payments & payouts"}
            show={3}
            text={"review payments,payouts,coupons and cards"}
          />
          <SettingsCard
            title={"notifications"}
            show={4}
            text={
              "choose notification preference and how you want to be contacted"
            }
          />
          <SettingsCard
            title={"global preferences"}
            show={5}
            text={"set your default currency,adjust theme and timezone"}
          />
          <SettingsCard
            title={"shipping & delivery"}
            show={6}
            navigation={"/deliverypage"}
            text={"review and track your order,and update delivery details"}
          />
          <SettingsCard
            title={"help & FAQS"}
            navigation={"/helppage"}
            show={9}
            text={"information on features and solution to users needs"}
          />
          <SettingsCard
            title={"about us"}
            navigation={"/aboutpage"}
            show={7}
            text={"know about our mission,vision and offers to the market"}
          />
          <SettingsCard
            title={"contact"}
            navigation={"/contactpage"}
            show={8}
            text={
              "get our contact information to reach us and also give reviews"
            }
          />
        </div>
      </div>
    </>
  );
};

export default Settingspage;
