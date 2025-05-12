import React, { useState, Suspense, lazy } from 'react';
import Spinner from './component/Spinner';

const Settings = lazy(() => import('./component/Settings'));
const Modal = lazy(() => import('./component/Modal'));

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Lazy Loaded Components</h1>

      <div className="space-x-4">
        <button onClick={() => setShowSettings(!showSettings)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" >
          Toggle Settings
        </button>

        <button onClick={() => setShowModal(!showModal)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" >
          Toggle Modal
        </button>
      </div>

      <div className="mt-6">
        {showSettings && (
          <Suspense fallback={<Spinner />}>
            <Settings />
          </Suspense>
        )}

        {showModal && (
          <Suspense fallback={<Spinner />}>
            <Modal onClose={() => setShowModal(false)} />
          </Suspense>
        )}
      </div>
    </div>
  );
}

export default App;
