import React from 'react';
import UserList from './component/UserList';
import withLoading from './component/withLoading';

const fetchUsers = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

const UserListWithLoading = withLoading(UserList);

const App = () => (
  <div className="min-h-screen bg-gray-100 py-10 px-6">
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h1 className="text-2xl font-semibold mb-4 text-center">User List</h1>
      <UserListWithLoading fetchData={fetchUsers} />
    </div>
  </div>
);

export default App;
