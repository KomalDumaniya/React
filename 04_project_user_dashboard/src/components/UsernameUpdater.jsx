import React, { useContext, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const UsernameUpdater = () => {
  const { settings, updateUsername } = useContext(SettingsContext);
  const [username, setUsername] = useState(settings.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUsername(username);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-1 font-semibold">Username:</label>
      <input className="border p-2 w-full" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        Update
      </button>
    </form>
  );
};

export default UsernameUpdater;
