import React from "react";
import { useTheme } from "../context/ThemeContext";

const themeClasses = {
  light: "bg-gray-100 text-black",
  dark: "bg-gray-900 text-white",
  blue: "bg-blue-700 text-white",
  red: "bg-red-700 text-white",
};

const Navbar = () => {
  const { theme, changeTheme, themes } = useTheme();

  return (
    <nav className={`flex justify-between items-center px-6 py-4 shadow-md ${themeClasses[theme] || themeClasses.light}`} >
      <h1 className="text-xl font-bold">MyApp</h1>
      <select value={theme} onChange={(e) => changeTheme(e.target.value)} className="border p-2 rounded bg-white text-black">
        {themes.map((themeName) => (
          <option key={themeName} value={themeName}>
            {themeName[0].toUpperCase() + themeName.slice(1)}
          </option>
        ))}
      </select>

    </nav>
  );
};

export default Navbar;
