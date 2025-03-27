import {useState} from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} style={{ height: "100vh" }}>
      <div className="p-4 flex justify-center items-center">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </div>
  );
}

export default App;
