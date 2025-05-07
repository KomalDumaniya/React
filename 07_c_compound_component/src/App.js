import React from 'react';
import Tabs from './component/Tabs';
import Tab from './component/Tab';

function App() {
  return (
    <div className="App">
      <Tabs>
        <Tab label="Tab 1">Content for Tab 1</Tab>
        <Tab label="Tab 2">Content for Tab 2</Tab>
        <Tab label="Tab 3">Content for Tab 3</Tab>
      </Tabs>
    </div>
  );
}

export default App;

