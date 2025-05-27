import React from 'react';
import './App.css';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <UserCard name="Alice" age={30} />
    </div>
  );
}

export default App;

