import React, { useState, useEffect } from 'react';
import useDebounce from '../hook/useDebounce';

function SearchComponent() {
  const [input, setInput] = useState('');
  const debouncedInput = useDebounce(input, 1000);

  useEffect(() => {
    if (debouncedInput.trim()) {
      console.log('Debounced search:', debouncedInput);
    }
  }, [debouncedInput]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Debounced Search</h2>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Start typing..." className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <div className="mt-4 text-sm text-gray-600">
          <p><strong>Debounced Input:</strong> {debouncedInput}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
