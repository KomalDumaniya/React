import React, { useState } from 'react';
import Modal from './component/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
        <p>This is the content.</p>
      </Modal>
    </div>
  );
}

export default App;
