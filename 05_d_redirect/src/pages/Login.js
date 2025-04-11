import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setLoggedInUser }) {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      setLoggedInUser(username.toLowerCase());
      navigate(`/profile/${username.toLowerCase()}`);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md mt-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input type="text" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} className="border p-2 w-full rounded mb-4" />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded w-full">
        Login
      </button>
    </div>
  );
}

export default Login;
