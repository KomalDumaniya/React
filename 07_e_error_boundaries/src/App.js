import React from 'react';
import ErrorBoundary from './component/ErrorBoundary';
import BuggyComponent from './component/BuggyComponent';

function App() {
  return (
    <ErrorBoundary>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to My App</h1>
        <BuggyComponent />
      </div>
    </ErrorBoundary>
  );
}

export default App;
