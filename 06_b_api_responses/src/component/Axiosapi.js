import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Axiosapi = () => {
  const [dogImage, setDogImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDogImage = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      setDogImage(response.data.message);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Dog Api</h1>

      {loading && (
        <div className="mb-4 text-blue-500 font-medium animate-pulse">
          Loading...
        </div>
      )}

      {error && (
        <p className="text-red-500 font-medium mb-4">{error}</p>
      )}

      {!loading && !error && dogImage && (
        <img src={dogImage} alt="A random dog" className="w-80 h-auto rounded-xl shadow-lg mb-6" />
      )}

      <button onClick={fetchDogImage} className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition duration-300" >
        Fetch New Dog
      </button>
    </div>
  );
};

export default Axiosapi;
