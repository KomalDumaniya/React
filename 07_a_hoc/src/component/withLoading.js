import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';

const withLoading = (WrappedComponent) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const loadData = async () => {
        try {
          const result = await props.fetchData();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      loadData();
    }, [props]);

    if (loading) return <Spinner />;
    if (error) {
      return (
        <div className="text-red-600 bg-red-100 p-4 rounded text-center">
          Error: {error.message}
        </div>
      );
    }

    return <WrappedComponent data={data} {...props} />;
  };
};

export default withLoading;