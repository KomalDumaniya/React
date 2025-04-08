import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();
const useTheme = () => useContext(ThemeContext);

const themes = ["light", "dark", "blue", "red"];

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = (newTheme) => {
    if (themes.includes(newTheme)) {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
