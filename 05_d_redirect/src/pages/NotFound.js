import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl text-red-600 font-bold">404 - Page Not Found</h2>
      <p className="text-gray-600 mt-2">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/login" className="text-blue-500 underline mt-4 block">Go to Login</Link>
    </div>
  );
}

export default NotFound;
