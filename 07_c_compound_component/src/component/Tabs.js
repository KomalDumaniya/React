import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex border-b">
        {React.Children.map(children, (child, index) => {
          if (child.type.displayName === 'Tab') {
            return React.cloneElement(child, {
              isActive: activeTab === index,
              onClick: () => handleTabClick(index),
            });
          }
          return null;
        })}
      </div>
      <div className="p-4">
        {React.Children.toArray(children)[activeTab]?.props.children}
      </div>
    </div>
  );
  
};

export default Tabs;


