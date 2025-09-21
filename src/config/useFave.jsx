import { React, useState,useEffect} from "react";

export const useFave = () => {
  // for the usage nav bar
  const [value, setValue] = useState(false);
  // one of the most useless hooks of all time have 
  // created ,imagine i only used it for 
  // the navigation bar ,and thats all, na wa!!!!
  return {
    value,
    setValue
  };
};
