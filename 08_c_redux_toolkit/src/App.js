import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { increment, decrement, reset } from './redux/counterSlice';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">Counter: {count}</h1>
      <div className="space-x-4">
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
