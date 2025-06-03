import React, { useContext } from 'react';
import { SettingsContext } from '../context/SettingsContext';

const ErrorMessage = () => {
  const { error } = useContext(SettingsContext);

  if (!error) return null;

  return (
    <div className="p-2 bg-red-500 text-white rounded">
      {error}
    </div>
  );

};

export default ErrorMessage;

