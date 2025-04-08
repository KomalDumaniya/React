import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const mockProfiles = {
  komal: {
    name: 'Komal',
    age: 21,
    bio: 'Frontend Developer who loves React.',
    posts: ['Just finished a React project!'],
    friends: ['Aum', 'Vidhi'],
  },
  aum: {
    name: 'Aum',
    age: 22,
    bio: '.net Developer',
    posts: ['Just finished a .net project!'],
    friends: ['Komal', 'Keyur'],
  },
  vidhi: {
    name: 'Vidhi',
    age: 20,
    bio: 'Backend engineer who loves building APIs.',
    posts: ['Just finished a Backend  project!'],
    friends: ['Komal', 'Ankita'],
  },
};

function Profile() {
  const { username } = useParams();
  const user = mockProfiles[username.toLowerCase()];
  const [activeTab, setActiveTab] = useState('posts');

  if (!user) {
    return <h2 className="text-xl text-red-600">User "{username}" not found.</h2>;
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
      <p className="text-gray-700 mb-1"><strong>Age:</strong> {user.age}</p>
      <p className="text-gray-700 mb-4"><strong>Bio:</strong> {user.bio}</p>

      <div className="flex border-b mb-4">
        <button className={`mr-4 pb-2 border-b-2 ${ activeTab === 'posts' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500' }`} onClick={() => setActiveTab('posts')}>
          Posts
        </button>
        <button className={`pb-2 border-b-2 ${ activeTab === 'friends' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500' }`} onClick={() => setActiveTab('friends')}>
          Friends
        </button>
      </div>

      {activeTab === 'posts' && (
        <ul className="list-disc pl-5 space-y-2">
          {user.posts.map((post, index) => (
            <li key={index} className="text-gray-700">{post}</li>
          ))}
        </ul>
      )}

      {activeTab === 'friends' && (
        <ul className="list-disc pl-5 space-y-2">
          {user.friends.map((friend, index) => (
            <li key={index} className="text-gray-700">{friend}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Profile;
