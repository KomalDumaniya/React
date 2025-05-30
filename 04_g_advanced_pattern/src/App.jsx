import React from 'react';
import withUser from './components/withUser';
import UserComponent from './components/UserComponent';

const EnhancedUserComponent = withUser(UserComponent);

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <EnhancedUserComponent />
    </div>
  );
};

export default App;
