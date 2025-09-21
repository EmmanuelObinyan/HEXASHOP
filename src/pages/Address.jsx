import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useAddress } from "../config/AddressContext";
import { PiAddressBook } from "react-icons/pi";
import { toast, Toaster } from "react-hot-toast";
import Button from "../components/Button";
import AdressComp from "../components/AdressComp";
const Address = () => {
  const navigate = useNavigate();
  const { deliveryAddress, setDeliveryAddress } = useAddress();
  // to store the address data
  const [address, setAddress] = useState({
    firstname: "",
    lastname: "",
    number: "",
    address: "",
  });
  // array to display the list of addresses
  const [selectedAddress, setSelectedAddress] = useState(() => {
    const saved = localStorage.getItem("selected");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("selected", JSON.stringify(selectedAddress));
  }, [selectedAddress]);
  // state to disbale button
  const [disable, setDisable] = useState(false);
  // to read the value of the inputs
  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };
  // function to submit the information and add it to the array
  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    if (address.firstname.trim() === "") {
      isValid = false;
      setDisable(true);
    }
    if (address.lastname.trim() === "") {
      isValid = false;
      setDisable(true);
    }
    if (address.number.trim() === "") {
      isValid = false;
      setDisable(true);
    } else if (address.number.length < 11) {
      isValid = false;
      setDisable(true);
      toast.error("phone number must be 11 digits", {
        style: {
          textTransform: "capitalize",
          color: "gray",
          fontWeight: "bold",
        },
      });
    }
    if (address.address.trim() === "") {
      isValid = false;
      setDisable(true);
    }
    setTimeout(() => {
      setAddress({
        ...address,
        firstname: "",
        lastname: "",
        number: "",
        address: "",
      });
    }, 2000);

    if (isValid) {
      setDisable(false);
      const addressObject = {
        firstname: address.firstname,
        lastname: address.lastname,
        number: Number(address.number),
        address: address.address,
      };
      setSelectedAddress([...selectedAddress, addressObject]);
      toast.success("address added successfully", {
        style: {
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "gray",
        },
      });
    }
  };
  // to read data
  const handleSelect = (index) => {
    const chosen = selectedAddress[index];
    setDeliveryAddress((deliveryAddress) => {
      if (
        deliveryAddress.length > 0 &&
        deliveryAddress[0].firsname === chosen.firstname &&
        deliveryAddress[0].lastname === chosen.lastname
      ) {
        return [];
      } else {
        return [chosen];
      }
    });
  };
  // to remove address
  const remove = (index) => {
    setSelectedAddress(
      selectedAddress.filter((element, item) => item !== index)
    );
  };
  return (
    <>
      <Toaster />
      <Link
        className="capitalize mt-3 font-semibold mb-3 w-fit ml-4 text-gray-700 xs:text-xs sm:text-md transition-all ease duration-200 active:text-orange-400"
        to={"/deliverycheckoutpage"}
      >
        back to checkout
      </Link>
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
      >
        select new address
      </h2>
      <section className="flex justify-between lg:w-[90%] justify-self-center xs:flex-col md:flex-row">
        <div
          className={` xs:w-[95%] sm:w-[75%] md:w-[50%] lg:w-[35%] xs:mx-auto md:ml-2 lg:ml-0 xs:mb-3 sm:mb-0`}
        >
          {selectedAddress.length >= 1 ? (
            <>
              {/* for the display of the object */}
              {selectedAddress.map((item, index) => (
                <div
                  className="border-1 flex  border-gray-300 rounded-lg sm:py-2 md:py-1"
                  key={index}
                >
                  <input
                    type="radio"
                    name="item"
                    onChange={() => handleSelect(index)}
                    className="w-10 xs:h-4 md:h-5 lg:h-7 xs:mt-2 lg:mt-3 p-1"
                  />
                  <aside className="p-2 md:h-fit lg:h-30">
                    <p className="xs:text-sm sm:text-md lg:text-lg text-gray-700  capitalize font-medium py-1">
                      {`${item.firstname}  ${item.lastname}`}
                    </p>
                    <p className="mt-2 text-gray-800 capitalize xs:text-xs sm:text-sm lg:text-md">
                      {item.address}
                    </p>
                       <p className="mt-2 text-gray-800 capitalize xs:text-xs md:text-sm">
                      {item.number}
                    </p>
                  </aside>
                  <MdOutlineCancel
                    className="xs:text-md sm:text-lg md:text-xl lg:text-2xl mt-2 text-gray-800 ml-2"
                    onClick={() => remove(index)}
                  />
                </div>
              ))}
            </>
          ) : (
            <div className=" xs:h-[20rem] sm:h-[30rem] md:h-[40rem] xs:w-90 sm:w-120 md:w-100 lg:w-full flex bg-gray-300 justify-center items-center justify-self-center sm:mb-2 md:mb-0">
              <aside className="flex items-center">
                <PiAddressBook className="md:h-25 xs:text-4xl sm:text-5xl lg:text-8xl text-gray-800" />
                <p className="text-gray-800 capitalize font-semibold xs:text-sm sm:text-md md:text-lg lg:text-3xl">
                  no address added yet
                </p>
              </aside>
            </div>
          )}
          {/* to submit the address to the delivery page */}

          {selectedAddress.length >= 1 ? (
            <Button
              btnFunction={() => {
                toast.success("address confirmed", {
                  style: {
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    color: "gray",
                  },
                });
                setTimeout(() => navigate("/deliverycheckoutpage"), 2000);
              }}
              disable={deliveryAddress.length === 0}
              btnText={"confirm address"}
            />
          ) : (
            ""
          )}
        </div>
        {/* for the address form */}
        <AdressComp
          show={false}
          info={address}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
      </section>
      <p className="uppercase my-4 text-center text-gray-800 xs:text-xs md:text-sm">
        @hexashop 2025 edition limited
      </p>
    </>
  );
};

export default Address;
