import React, { useState } from "react";
import useLocalStorage from "./customhooks/useLocalStorage";

function App() {
  const [input, setInput] = useState("");
  const [storedValue, setValue, getValue, removeValue] = useLocalStorage("userInput", "");

  return (
    <div>
      <input className="mt-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Enter something..." />
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => setValue(input)}>Set</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={getValue}>Get</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={removeValue}>Remove</button>
      </div>
    </div>
  );
}

export default App;
