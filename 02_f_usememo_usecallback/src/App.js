import React, { useState, useMemo, useCallback } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const sumOfSquares = useMemo(() => {
    return numbers.reduce((sum, num) => sum + num * num, 0);
  }, [numbers]);

  const addRandomNumber = useCallback(() => {
    setNumbers((prevNumbers) => [...prevNumbers, Math.floor(Math.random() * 10) + 1]);
  }, []);

  return (
    <div className="p-4 border rounded shadow-md max-w-sm mx-auto text-center">
      <h2 className="text-lg font-bold mb-2">Sum of Squares</h2>
      <p className="mb-4">Numbers: {numbers.join(", ")}</p>
      <p className="mb-4">Sum of Squares: {sumOfSquares}</p>
      <button className="mt-2 px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-800"
        onClick={addRandomNumber}>Add Random Number</button>
    </div>
  );
};

export default App;