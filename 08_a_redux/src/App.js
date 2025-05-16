import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './redux/store';
import { increment, decrement } from './redux/actions';

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Count: {count}</h1>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" >
          Increment
        </button>
        <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" >
          Decrement
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
