// src/Sidebar.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faHeart, faMapMarkerAlt, faCog } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><FontAwesomeIcon icon={faUser} /> JABLA JERRY   </li>
        <li><FontAwesomeIcon icon={faEnvelope} /> Messages </li>
        <li><FontAwesomeIcon icon={faHeart} /> DOTA2,VALORANT</li>
        <li><FontAwesomeIcon icon={faMapMarkerAlt} /> BAYABAS CDO ZONE 4 TARUC</li>
      </ul>
      <button className="logout-button">Logout</button>
    </div>
  );
};

export default Sidebar;
