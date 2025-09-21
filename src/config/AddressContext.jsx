import { useState, useEffect, useContext, createContext } from "react";
import React from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  // cart for the delivery methods to be added to
  const [deliveryCart, setDeliveryCart] = useState([]);

  // for the payment array
  const [details, setDetails] = useState(() => {
    const saved = localStorage.getItem("Detail");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("Detail", JSON.stringify(details));
  }, [details]);
  // function for adding the item to the delivery cart
  const handleAddItem = (address) => {
    if (address) {
      setDeliveryCart([address]);
      setDetails([address]);
    }
  };
  // for adding the address
  const [deliveryAddress, setDeliveryAddress] = useState(() => {
    const saved = localStorage.getItem("checkout");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("checkout", JSON.stringify(deliveryAddress));
  }, [deliveryAddress]);
  return (
    <AddressContext.Provider
      value={{
        deliveryCart,
        details,
        handleAddItem,
        deliveryAddress,
        setDeliveryAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  return useContext(AddressContext);
};
