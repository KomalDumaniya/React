import React, { useEffect, useState } from "react";
import { logout } from "../auth/auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "User");
  }, []);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div>
      <h1 className='m-4 text-2xl'>Welcome, {username}!</h1>
      <h1 className='m-4 text-xl'>This is Dashboard Page.</h1>
      <button className="m-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
