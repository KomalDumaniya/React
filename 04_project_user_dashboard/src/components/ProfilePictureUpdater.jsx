import React, { useContext, useState } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const ProfilePictureUpdater = () => {
  const { settings, updateProfilePicture } = useContext(SettingsContext);
  const [url, setUrl] = useState(settings.profilePicture);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfilePicture(url);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <label className="block mb-1 font-semibold">Profile Picture URL:</label>
      <input className="border p-2 w-full" type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
        Update
      </button>
      {settings.profilePicture && (
        <div className="mt-2">
          <img src={settings.profilePicture} alt="Profile" className="w-16 h-16 rounded-full" />
        </div>
      )}
    </form>
  );
};

export default ProfilePictureUpdater;

// Profile Picture URL example: 
// https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250


