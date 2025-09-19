import React, { useState, useEffect } from "react";
import { addBusinessDays, format } from "date-fns";
import { useAddress } from "../config/AddressContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../config/CartProvider";
const CustomerAddress = ({ mindays = 3, maxdays = 6 }) => {
  const { cart } = useCart();
  // for the address
  const { handleAddItem, deliveryCart } = useAddress();
  const navigate = useNavigate();
  // for the dynamic date changing
  const minDate = addBusinessDays(new Date(), mindays);
  const maxDate = addBusinessDays(new Date(), maxdays);
  const deliveryRange = `${format(minDate, "EEEE,MMMM d")}-${format(
    maxDate,
    "EEEE,MMMM d"
  )}`;

  // for the delivery array
  const delivery = [
    {
      id: 1,
      method: "pick-up station",
      delivery: `delivery between  ${deliveryRange}`,
    },
    {
      id: 2,
      method: "door delivery",
      delivery: `delivery between  ${deliveryRange}`,
    },
  ];
  // to store the delivery array object
  const [selectedProduct, setSelectedProduct] = useState(null);
  //  function for reading the method
  const handleRead = (e) => {
    const deliveryId = Number(e.target.value);
    const product = delivery.find((item) => item.id === deliveryId);
     setSelectedProduct(product)
     handleAddItem(product)
  };
  return (
    <div className="mt-8 xs:w-[95%] sm:w-[80%] md:w-[70%] mx-auto">
      <p className="flex  items-center justify-between xs:text-md sm:text-lg md:text-xl lg:text-2xl font-medium capitalize text-gray-400">
        customer address
        <span
          className=" mr-1 xs:text-xs md:text-sm lg:text-lg text-orange-400 font-light cursor-pointer"
          onClick={() => navigate("/addresspage")}
        >
          change
        </span>
      </p>
      <div className=" border-1 border-gray-300 pb-2 xs:h-20 md:h-17 lg:h-18 px-3  bg-gray-50 ">
        <p className="capitalize mt-4 mb-2 text-gray-700 font-semibold text-sm">
          emmanuel obinyan
        </p>
        {/* the picked customer address */}
        <p className="capitalize font-light text-gray-700 xs:text-xs md:text-sm">
          imole oluwa estate sefu ota, adipisicing fghjklp hjjkk elit.....
        </p>
      </div>

      <p className="flex  items-center justify-between sm:text-sm  md:text-xl lg:text-2xl  xs:mt-6 sm:mt-8 md:mt-10 lg:mt-15 font-medium capitalize text-gray-400">
        delivery method
      </p>

      {/* for the delivery method */}

      {delivery.map((item) => (
        <div
          className=" border-1 border-gray-300 px-2 md:h-16 lg:h-20 bg-gray-50 flex flex-col justify-between mb-3 sm:mt-3 lg:mt-5"
          key={item.id}
        >
          {/* for the mapping of delivery methods on the components */}

          <div className="flex  p-2 justify-around xs:w-[53%] sm:w-[35%] md:w-[30%] lg:w-[24%]">
            <input
              type="radio"
              name="item"
              onChange={handleRead}
              checked={selectedProduct?.id === item.id}
              value={item.id}
              className="sm:w-5 lg:w-10 border-2 "
            />
            <p className="capitalize font-semibold text-gray-700 xs:text-sm md:text-md lg:text-xl">
              {item.method}
              <span className="xs:text-xs sm:text-sm md:text-md lg:text-lg font-light ml-2">
                (15$)
              </span>
            </p>
          </div>
          <p className=" mt-2  capitalize font-medium text-gray-700 xs:text-xs md:text-sm lg:text-md ">
            {item.delivery}
          </p>
        </div>
      ))}

      {/* for the shipment */}
      {/* mapping the deliveryCart to the item */}
      <p className="flex  items-center xs:text-lg  md:text-xl lg:text-2xl mt-15 font-medium capitalize text-gray-400">
        shipment 1/1
      </p>
      <div className="mt-3 border-1 border-gray-300  lg:h-[13rem] p-2 mb-3 bg-gray-50 ">
        {deliveryCart.map((item) => (
          <div key={item.id}>
            <p className="capitalize font-medium text-gray-700 py-2 xs:text-sm md:text-md lg:text-lg">
              {item.method}(15$)
            </p>
            <p className="capitalize text-gray-800 mt-2 font-medium  xs:text-xs md:text-sm lg:text-md">
              {item.delivery}
            </p>
          </div>
        ))}
        {/* product details */}

        <div className="grid gap-3 border-1 border-gray-300 mb-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-4 w-full">
          {cart.map((item) => (
            <div
              className="flex  sm:w-50 md:w-fit lg:w-100 relative"
              key={item.id}
            >
              {/* for the quantity */}
              <span className="absolute xs:left-13 sm:left-13 md:left-14 lg:left-24 bg-gray-100 font-light xs:px-1 lg:px-2 xs:text-xs md:text-sm lg:text-md">
                {item.quantity}x
              </span>
              <img
                src={item.image}
                alt=""
                className="h-20 object-cover xs:w-18 sm:w-20  md:w-25 lg:w-30 mr-2"
              />
              <aside className="mr-2">
                <p className="capitalize font-medium text-gray-700 xs:text-xs md:text-sm lg:text-md">{`${
                  item.name.length > 20
                    ? item.name.slice(0, 20) + "..."
                    : item.name
                }`}</p>

                <p className="mt-2 font-medium capitalize text-gray-700 xs:text-xs sm:text-md md:text-lg">
                  ${item.quantity * item.price}
                </p>
              </aside>
            </div>
          ))}
        </div>
        {/* for the button */}
        <div
          className={` flex
         justify-self-center
         justify-center
         capitalize
         my-4
         font-bold
         rounded-xl
         xs:w-40
         sm:w-45
         md:w-50
         lg:w-55
         p-3
         xs:text-center
         md:text-left
         border-0
         transition-all
         ease
         duration-300
         active:scale-95
         cursor-pointer
         bg-gray-800
         xs:text-xs
         text-gray-300
         sm:text-sm
         md:text-md
         `}
          onClick={""}
        >
          confirm delivery details
        </div>
      </div>
    </div>
  );
};

export default CustomerAddress;
