import { useState, useEffect } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        setUser(data.results[0]);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4 bordera rounded-lg shadow-lg w-80">
      <img
        src={user.picture.large}
        alt="User"
        className="rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg font-bold text-center">
        {user.name.title} {user.name.first} {user.name.last}
      </h2>
      <p className="text-red-600 text-center">{user.email}</p>
      <p className="text-gray-600 text-center">{user.location.city}, {user.location.country}</p>
      
    </div>
  );
}

export default App;