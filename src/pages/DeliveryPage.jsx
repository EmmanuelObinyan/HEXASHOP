import React from "react";
import { Link } from "react-router-dom";
const DeliveryPage = () => {
  return (
    <>
      <div className="xs:mt-2 sm:mt-3 md:mt-4 lg:mt-5">
        <Link
          className="capitalize font-semibold mb-3 w-fit ml-4 text-gray-700 xs:text-sm sm:text-md transition-all ease duration-200 active:text-orange-400"
          to={"/cartspage"}
        >
          back to cart
        </Link>
        delivery page
      </div>
    </>
  );
};

export default DeliveryPage;
