import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { AuthStatus } from "./component/AuthStatus";

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <AuthStatus />
      </div>
    </AuthProvider>
  );
}

export default App;
