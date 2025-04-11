import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockProfiles = {
  komal: {
    name: "Komal",
    age: 21,
    bio: "Frontend Developer who loves React.",
    posts: ["Just finished a React project!"],
    friends: ["Aum", "Keyur"],
  },
};

function Profile({ loggedInUser }) {
  const { username } = useParams();
  const profileUsername = username.toLowerCase();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("posts");

  useEffect(() => {
    if (profileUsername === loggedInUser) {
      setUser({
        name: loggedInUser.charAt(0).toUpperCase() + loggedInUser.slice(1),
        age: Math.floor(Math.random() * 10) + 20,
        bio: "This is your profile.",
        posts: ["Excited to be here!"],
        friends: [],
      });
    } else if (profileUsername in mockProfiles) {
      setUser(mockProfiles[profileUsername]);
    } else {
      navigate("/not-found");
    }
  }, [profileUsername, loggedInUser, navigate]);

  if (!user) return <h2>Loading...</h2>;

  return (
    <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-1">{user.name}</h2>
      <p className="text-gray-700 mb-1"><strong>Age:</strong> {user.age}</p>
      <p className="text-gray-700 mb-4"><strong>Bio:</strong> {user.bio}</p>

      <div className="flex border-b mb-4">
        <button className={`mr-4 pb-2 border-b-2 ${activeTab === "posts" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"}`} onClick={() => setActiveTab("posts")}>
          Posts
        </button>
        <button className={`pb-2 border-b-2 ${activeTab === "friends" ? "border-blue-500 text-blue-600" : "border-transparent text-gray-500"}`} onClick={() => setActiveTab("friends")}>
          Friends
        </button>
      </div>

      {activeTab === "posts" && (
        <ul className="list-disc pl-5 space-y-2">
          {user.posts.map((post, index) => (
            <li key={index} className="text-gray-700">{post}</li>
          ))}
        </ul>
      )}

      {activeTab === "friends" && (
        <ul className="list-disc pl-5 space-y-2">
          {user.friends.length > 0 ? (
            user.friends.map((friend, index) => (
              <li key={index} className="text-gray-700">{friend}</li>
            ))
          ) : (
            <p className="text-gray-500">No friends yet.</p>
          )}
        </ul>
      )}
    </div>
  );
}

export default Profile;
