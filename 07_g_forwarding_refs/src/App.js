import React, { useRef } from 'react';
import FocusableInput from './component/FocusableInput';

const App = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.value = 1000;
    inputRef.current.focus();
  };

  return (
    <div className="p-4">
      <FocusableInput ref={inputRef} placeholder="Type here..." />
      <button onClick={handleFocus} className="m-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
        Focus the Input
      </button>
    </div>
  );
};

export default App;