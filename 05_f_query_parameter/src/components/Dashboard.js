import React from 'react';
import { data } from '../data';

const Dashboard = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">All Technologies</h2>
      <ul className="list-disc list-inside">
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
