import React from 'react';

const UserList = ({ data }) => (
  <ul className="space-y-2">
    {data.map((user) => (
      <li key={user.id}  className="p-3 bg-white rounded shadow hover:bg-gray-100 transition" >
        {user.name}
      </li>
    ))}
  </ul>
);

export default UserList;
