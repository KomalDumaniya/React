import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axiosapi = () => {
  const [dogImage, setDogImage] = useState('');

  const fetchDogImage = async () => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(response.data.message);
    } catch (error) {
      console.error('Error fetching dog image:', error);
    }
  };

  useEffect(() => {
    fetchDogImage(); 
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-400 p-6">
    <h1 className="text-3xl font-bold mb-6 text-gray-800">Random Dog Image</h1>
    {dogImage && (
      <img src={dogImage} alt="A random dog" className="w-80 h-auto rounded-2xl shadow-lg mb-6" />
    )}
    <button onClick={fetchDogImage} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300" >
      Load New Dog
    </button>
  </div>
  );
};

export default Axiosapi;


