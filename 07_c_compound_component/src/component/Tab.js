import React from 'react';

const Tab = ({ isActive, onClick, label }) => {
  return (
    <button className={`px-4 py-2 text-sm font-medium ${ isActive ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500' }`} onClick={onClick} >
      {label}
    </button>
  );
};

Tab.displayName = 'Tab';

export default Tab;