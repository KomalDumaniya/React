import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen flex flex-col items-center justify-center  ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-900 text-white'}`} >
            <h1 className="text-4xl font-bold mb-4">
                {theme === 'light' ? 'Light' : 'Dark'} Theme
            </h1>
            <button onClick={toggleTheme} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded ">
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
        </div>
    );
};

export default Home;
