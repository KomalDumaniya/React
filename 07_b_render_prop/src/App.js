import React from 'react';
import MouseTracker from './component/MouseTracker';

function App() {
  return (
    <div className="App bg-gray-600 min-h-screen flex items-center justify-center">
      <header className="text-center">
        <MouseTracker
          render={({ x, y }) => (
            <p className="text-lg font-semibold text-gray-100">
              The current mouse position is ({x}, {y})
            </p>
          )}
        />
      </header>
    </div>
  );
}

export default App;