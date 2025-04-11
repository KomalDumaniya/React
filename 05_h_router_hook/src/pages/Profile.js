import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const mockProfiles = {
  komal: {
    name: 'Komal',
    age: 21,
    bio: 'Frontend Developer who loves React.',
  },
  aum: {
    name: 'Aum',
    age: 22,
    bio: '.net Developer',
  },
  vidhi: {
    name: 'Vidhi',
    age: 20,
    bio: 'Backend engineer who loves building APIs.',
  },
};

function Profile() {
  const { username } = useParams();
  const navigate = useNavigate();
  const user = mockProfiles[username];

  if (!user) {
    return <h2 className="text-xl text-red-600">User "{username}" not found.</h2>;
  }

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <p className="text-gray-700 mb-1"><strong>Age:</strong> {user.age}</p>
      <p className="text-gray-700 mb-4"><strong>Bio:</strong> {user.bio}</p>
      <button onClick={() => navigate('/')} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" >
        Go Back
      </button>
    </div>
  );
}

export default Profile;
