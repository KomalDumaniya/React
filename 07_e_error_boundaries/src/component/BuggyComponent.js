import React, { useState } from 'react';

function BuggyComponent() {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('This is a simulated error!');
  }

  return (
    <button onClick={() => setThrowError(true)} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded" >
      Click to Trigger Error
    </button>
  );
}

export default BuggyComponent;
