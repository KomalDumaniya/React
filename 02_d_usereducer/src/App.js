import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg w-64 mx-auto mt-10 shadow-md">
      <h1 className="text-2xl font-bold">Counter: {state.count}</h1>
      <div className="flex space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => dispatch({ type: "INCREMENT" })}>
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={() => dispatch({ type: "DECREMENT" })}>
          Decrement
        </button>
      </div>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        onClick={() => dispatch({ type: "RESET" })}>
        Reset
      </button>
    </div>
  );
};

export default App;
