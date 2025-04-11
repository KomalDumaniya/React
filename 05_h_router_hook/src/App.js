import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

