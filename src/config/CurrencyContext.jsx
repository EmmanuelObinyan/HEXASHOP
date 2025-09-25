import React, { useState, useEffect, useContext, createContext } from "react";
import {toast} from "react-hot-toast";

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  // for the digit number
  const [error, setError] = useState("");
  const [option, setOption] = useState(() => {
    const saved = localStorage.getItem("option");
    return saved ? JSON.parse(saved) : ""
  });
  //   to save the option
  useEffect(() => {
    localStorage.setItem("option",JSON.stringify(option));
  }, [option]);
  const [currencyData, setCurrencyData] = useState(null);
  // loading state
  const [loading, setLoading] = useState(true);
  const controller= new AbortController()
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.getgeoapi.com/v2/currency/convert?from=USD&to=${option}&amount=1&format=json/`,
        {
          signal:controller.signal,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-api-key":import.meta.env.VITE_API_KEY,
          },
        }
      );
      const data = await res.json();
      const {
        rates: {
          [option]:{rate},
        },
      } = data;
      setCurrencyData(rate);
      setLoading(false);

    } 
    catch (err) {
      setLoading(false)
        setError(err)
      toast.error("an error occured" + error)
    }
  };
  useEffect(() => {
    fetchData();
    return()=>{
      controller.abort()}
  }, [option]);
  
// to track the payment
const[value,setValue]=useState(false)
  return (
    <CurrencyContext.Provider
      value={{ value,setValue,error, option,setOption, loading, currencyData }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
export const useCurrency = () => {
  return useContext(CurrencyContext);
};
