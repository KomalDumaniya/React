import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../auth/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }
    login("dummy_token");
    localStorage.setItem("username", username);
    navigate("/dashboard");
  };

  return (
    <>
      <div className="p-4">
        <h1 className="text-xl mb-4">Login page</h1>

        <div className="mb-4 flex items-center">
          <label className="mb-1" htmlFor="username">Username</label>
          <input id="username" className="m-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="mb-4 flex items-center">
          <label className=" mb-1" htmlFor="password">Password</label>
          <input id="password" className="m-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleLogin} >
          Login
        </button>
      </div>

    </>
  );
};

export default Login;
