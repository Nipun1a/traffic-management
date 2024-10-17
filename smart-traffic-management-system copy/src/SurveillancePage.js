// src/SurveillancePage.js
import React from 'react';
import './SurveillancePage.css';

const SurveillancePage = () => {
  return (
    <div className="surveillance-container">
      {/* Logo */}
      <header className="surveillance-header">
        <img src="trlogo.jpg" alt="Traffic Management Logo" className="logo" />
      </header>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#">First Page</a></li>
          <li><a href="#">All Recordings</a></li>
          <li><a href="#">Challans</a></li>
          <li><a href="#">Help</a></li>
        </ul>
      </nav>

      {/* Main Content with Camera Buttons */}
      <div className="box-container">
        <div className="box">
          <h3>Camera 1</h3>
          <button>Cam1</button>
        </div>
        <div className="box">
          <h3>Camera 2</h3>
          <button>Cam2</button>
        </div>
        <div className="box">
          <h3>Camera 3</h3>
          <button>Cam3</button>
        </div>
        <div className="box">
          <h3>Camera 4</h3>
          <button>Cam4</button>
        </div>
      </div>
    </div>
  );
};

export default SurveillancePage;
