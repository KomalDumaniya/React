import React from "react";
import { useAuth } from "../context/AuthContext";

const AuthStatus = () => {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div className="p-4 text-center">
      {isLoggedIn ? (
        <>
          <h2 className="text-green-600 text-xl font-semibold">Welcome back!</h2>
          <button
            onClick={logout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h2 className="text-blue-600 text-xl font-semibold">Please login</h2>
          <button
            onClick={login}
            className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export {AuthStatus}


