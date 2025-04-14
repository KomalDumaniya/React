import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Home from './component/Home';

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
