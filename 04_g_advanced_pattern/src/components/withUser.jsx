import React, { useEffect, useState } from 'react';

const withUser = (WrappedComponent) => {
  return (props) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
          const data = await response.json();
          setUser(data);
        } catch (error) {
          console.error('Error fetching user:', error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    }, []);

    if (loading) {
      return <div className="text-center mt-4">Loading user...</div>;
    }

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withUser;