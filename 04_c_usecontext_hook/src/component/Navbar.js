import React from "react";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, changeTheme } = useTheme();

  return (
    <nav className={`flex justify-between items-center px-6 py-4 shadow-md ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h1 className="text-xl font-bold">MyApp</h1>
      <button onClick={changeTheme}className="border px-4 py-2 rounded hover:bg-opacity-20 transition border-current"> Theme Change </button>
    </nav>
  );
};

export default Navbar;

