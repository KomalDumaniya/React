import React, { useContext } from 'react';
import { SettingsProvider, SettingsContext } from './context/SettingsContext';
import Dashboard from './components/Dashboard';

const AppContent = () => {
  const { settings } = useContext(SettingsContext);
  const { language, theme, username } = settings;

  const greeting = language === 'es' ? 'Hola' : 'Hello';

  return (
    <div className={theme === 'dark' ? 'bg-gray-800 text-white min-h-screen' : 'bg-gray-100 text-black min-h-screen'}>
      <header className="p-4">
        <h1 className="text-3xl font-bold">
          {greeting}, {username}!
        </h1>
      </header>
      <main className="p-4">
        <Dashboard />
      </main>
    </div>
  );
};

const App = () => {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
};

export default App;
