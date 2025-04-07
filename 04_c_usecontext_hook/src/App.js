import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./component/Navbar";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <div className="p-6">
        <p>Welcome </p>
      </div>
    </ThemeProvider>
  );
};

export default App;
