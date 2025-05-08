import React from 'react';

const Spinner = () => (
  <div className="flex justify-center items-center h-40">
    <div className="text-gray-500 text-lg animate-ping">Loading...</div>
  </div>
);

export default Spinner;