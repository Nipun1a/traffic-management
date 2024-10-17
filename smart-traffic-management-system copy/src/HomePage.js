// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartSurveillance = () => {
    navigate('/surveillance'); // Navigates to the Surveillance page
  };

  return (
    <div className="home-container">
      <h1>AI-Powered Smart Traffic Management System</h1>
      <button className="start-button" onClick={handleStartSurveillance}>
        Start Surveillance
      </button>
    </div>
  );
};

export default HomePage;
