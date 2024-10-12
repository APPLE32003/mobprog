// src/UserProfile.js

import React from 'react';
import Sidebar from './Sidebar';
import './UserProfile.css';

const UserProfile = () => {
  const user = {
    name: "Jerry Jabla",
    email: "jablajerry12@gmail.com",
    profilePicture: process.env.PUBLIC_URL + '/459157030_2335024140172707_376870919467923162_n.jpg',
  };

  return (
    <div className="user-profile">
      <h1 className="profile-title">User Profile Page</h1>
      <div className="profile-card">
        <img src={user.profilePicture} alt="Profile" className="profile-picture" />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <Sidebar />
    </div>
  );
};

export default UserProfile;
