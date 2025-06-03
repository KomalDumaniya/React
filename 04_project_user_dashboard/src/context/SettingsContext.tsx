import React, { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    username: 'Guest',
    profilePicture: '',
    theme: 'light',
    language: 'en',
  });

  const [error, setError] = useState('');

  const updateUsername = (newUsername) => {
    setSettings((prev) => ({ ...prev, username: newUsername }));
    setError('');
  };

  const updateProfilePicture = (url) => {
    setSettings((prev) => ({ ...prev, profilePicture: url }));
    setError('');
  };

  const updateTheme = (newTheme) => {
    if (['light', 'dark'].includes(newTheme)) {
      setSettings((prev) => ({ ...prev, theme: newTheme }));
      setError('');
    } else {
      setError('Unsupported theme selected.');
    }
  };

  const updateLanguage = (newLanguage) => {
    if (['en', 'es'].includes(newLanguage)) {
      setSettings((prev) => ({ ...prev, language: newLanguage }));
      setError('');
    } else {
      setError('Unsupported language selected.');
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        error,
        updateUsername,
        updateProfilePicture,
        updateTheme,
        updateLanguage,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};


