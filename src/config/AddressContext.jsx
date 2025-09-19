import { useState, useEffect, useContext, createContext } from "react";
import React from "react";

const AddressContext = createContext();

export const AddressProvider = ({ children }) => {
  // cart for the delivery methods to be added to
  const [deliveryCart, setDeliveryCart] = useState([]);
  //    to save object

  // function for adding the item to the delivery cart
  const handleAddItem = (address) => {
    
    if(address){
        setDeliveryCart([address])
    }
    }
    
  
  return (
    <AddressContext.Provider value={{ deliveryCart, handleAddItem }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddress = () => {
  return useContext(AddressContext);
};
