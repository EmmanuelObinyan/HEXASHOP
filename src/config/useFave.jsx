import { React, useState,useEffect} from "react";

export const useFave = () => {
  // for the usage nav bar
  const [value, setValue] = useState(false);
  // for the accessories page
  const[loading,setLoading]=useState(true)
  return {
    value,
    setValue,
    loading,
    setLoading
  };
};
