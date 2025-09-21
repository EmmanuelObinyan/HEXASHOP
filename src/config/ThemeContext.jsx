import React, { useState, useEffect, useContext, createContext } from "react";
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // to store the value of the theme radio button
  const [selected, setSelected] = useState(() => {
    const saved = localStorage.getItem("select");
    return saved ? JSON.parse(saved) : null;
  });
  // to save the mode in the state
  useEffect(() => {
    localStorage.setItem("select", JSON.stringify(selected));
  }, [selected]);
  //    for the darkmode
  const [dark, setDark] = useState(false);
  //  to save the theme
  useEffect(() => {
    if (selected?.text === "dark mode") {
      setDark(true);
      localStorage.setItem("theme", dark);
    } else if (selected?.text === "light mode") {
      setDark(false);
      localStorage.setItem("theme", dark);
    }
  }, [selected, dark]);

  // to get the key theme ,in function
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDark(theme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ selected, setSelected, dark }}>
      {children}
    </ThemeContext.Provider>
  );
};
export const useTheme = () => {
  return useContext(ThemeContext);
};
