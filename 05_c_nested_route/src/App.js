import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
        <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

