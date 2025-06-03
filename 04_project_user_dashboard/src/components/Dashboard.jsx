import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';
import UsernameUpdater from './UsernameUpdater';
import ProfilePictureUpdater from './ProfilePictureUpdater';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';
import ErrorMessage from './ErrorMessage';

const Dashboard = () => {
  const { settings } = useContext(SettingsContext);
  const { theme } = settings;

  const bgClass = theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black';
  const borderColor = theme === 'dark' ? 'border-gray-600' : 'border-gray-300';

  return (
    <div className={`max-w-md mx-auto p-4 border ${borderColor} rounded-lg shadow-md ${bgClass}`}>
      <h1 className="text-2xl font-bold mb-4">User Settings</h1>
      <UsernameUpdater />
      <ProfilePictureUpdater />
      <ThemeSelector />
      <LanguageSelector />
      <ErrorMessage />
    </div>
  );
};

export default Dashboard;

