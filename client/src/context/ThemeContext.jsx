import { createContext, useState } from "react";


export const ThemeContext = createContext();


export function ThemeProvider({ children }) {


  const [darkMode, setDarkMode] = useState(false);


  function toggleTheme(){

    setDarkMode(!darkMode);

    document.body.className =
      !darkMode ? "dark" : "";

  }


  return (

    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme
      }}
    >

      {children}

    </ThemeContext.Provider>

  );

}