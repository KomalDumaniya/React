import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from './redux/store';
import { increment, decrement, reset, nextPage, prevPage } from './redux/counterSlice';

function Counter() {
  const { count, history, page, itemsPerPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const startIndex = (page - 1) * itemsPerPage;
  const currentPageItems = history.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(history.length / itemsPerPage);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Counter: {count}</h1>
      <div className="space-x-4 mb-8">
        <button onClick={() => dispatch(increment())} className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded" >
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded" >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded" >
          Reset
        </button>
      </div>

      <div className="bg-white shadow-md rounded p-4 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">History (Page {page}/{totalPages || 1})</h2>
        <ul className="list-disc list-inside space-y-1">
          {currentPageItems.length === 0 ? (
            <li className="text-gray-500">No history yet.</li>
          ) : (
            currentPageItems.map((val, i) => (
              <li key={i} className="text-gray-800">Value: {val}</li>
            ))
          )}
        </ul>
        <div className="flex justify-between mt-4">
          <button onClick={() => dispatch(prevPage())} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-40" disabled={page === 1} >
            Prev
          </button>
          <button onClick={() => dispatch(nextPage())} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded disabled:opacity-40" disabled={page === totalPages || totalPages === 0} >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;

