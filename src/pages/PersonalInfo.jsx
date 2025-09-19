import React from "react";
import { MdOutlineExitToApp } from 'react-icons/md';
import { Link } from "react-router-dom";
const PersonalInfo = () => {
  return (
    <>
      <div className="xs:mt-2 sm:mt-3 md:mt-4 lg:mt-7">
        <Link
          className="capitalize flex items-center font-semibold mb-3 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
          to={"/settingspage"}
        >
         <MdOutlineExitToApp className=""/>     
          back to settings
        </Link>
      </div>
    </>
  );
};

export default PersonalInfo;
