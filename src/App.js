import React from 'react';
import './App.css';
import MainDashboard from './MainDashboard';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';

function App() {
  return (
    <div className="app">
      <h1>This is the fitcar app</h1>
      <div className="app__body">
      <SidebarLeft />
      <MainDashboard />
      <SidebarRight />
      
      </div>
      
    </div>
  );
}

export default App;
