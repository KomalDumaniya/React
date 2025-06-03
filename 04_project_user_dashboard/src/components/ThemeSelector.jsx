import React, { useContext, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const ThemeSelector = () => {
  const { settings, updateTheme } = useContext(SettingsContext);
  const [theme, setTheme] = useState(settings.theme);
  const currentTheme = settings.theme;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTheme(theme);
  };

  const selectClass = currentTheme === 'dark' ? 'bg-gray-600 text-white border-gray-500' : 'bg-white text-black border-gray-300';

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-1 font-semibold">Theme:</label>
      <select className={`border p-2 w-full rounded ${selectClass}`} value={theme} onChange={(e) => setTheme(e.target.value)} >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        Update
      </button>
    </form>
  );
};

export default ThemeSelector;
