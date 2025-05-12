import React from 'react';

function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Lazy Modal</h2>
        <p>This modal was loaded lazily!</p>
        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
