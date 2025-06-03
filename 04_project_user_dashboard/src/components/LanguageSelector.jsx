import React, { useContext, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const LanguageSelector = () => {
  const { settings, updateLanguage } = useContext(SettingsContext);
  const [language, setLanguage] = useState(settings.language);
  const { theme } = settings;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLanguage(language);
  };

  const selectClass = theme === 'dark' ? 'bg-gray-600 text-white border-gray-500' : 'bg-white text-black border-gray-300';

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-1 font-semibold">Language:</label>
      <select className={`border p-2 w-full rounded ${selectClass}`} value={language} onChange={(e) => setLanguage(e.target.value)} >
        <option value="en">English</option>
        <option value="es">Spanish</option>
      </select>
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        Update
      </button>
    </form>
  );
};

export default LanguageSelector;
