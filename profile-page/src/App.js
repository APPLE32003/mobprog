// src/App.js

import React from 'react';
import './App.css'; // Add general styles
import UserProfile from './UserProfile'; // Import UserProfile


const App = () => {
  return (
    <div className="app-container">
      <UserProfile /> {/* Render UserProfile here */}
    </div>
  );
};

export default App;
