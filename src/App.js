import React from 'react';
import MainHeader from './comps/MainHeader.js';
import Users from './comps/Users.js';
import './App.css';

function App() {
  return (
    <div className="FullBar">
      <MainHeader />
      <Users />
    </div>
  );
}

export default App;
