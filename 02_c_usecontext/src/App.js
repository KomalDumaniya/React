import React, { useState, createContext, useContext } from "react";

const LanguageContext = createContext();

const translations = {
  english: {
    welcome: "Welcome to our website!",
    description: "This is a multi-language website example.",
    changeLanguage: "Change Language",
  },
  spanish: {
    welcome: "¡Bienvenido a nuestro sitio web!",
    description: "Este es un ejemplo de sitio web multilingüe.",
    changeLanguage: "Cambiar idioma",
  },
};

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("english");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "spanish" : "english"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const Content = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold">{translations[language].welcome}</h1>
      <p className="mt-2">{translations[language].description}</p>
      <button className="px-4 py-2 bg-blue-500 text-white" onClick={toggleLanguage}>
        {translations[language].changeLanguage}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <div>
        <Content />
      </div>
    </LanguageProvider>
  );
};

export default App;