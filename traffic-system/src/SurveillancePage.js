import React, { useState } from 'react';
import './SurveillancePage.css';

const SurveillancePage = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <div className="surveillance-container">
      {/* Logo */}
      <header className="surveillance-header">
        <img src={`${process.env.PUBLIC_URL}/image.png`} alt="Traffic Management Logo" className="logo" />
      </header>

      {/* Hamburger Menu */}
      <button className="hamburger" onClick={toggleNavbar}>
        ☰
      </button>

      {/* Navbar */}
      <nav className={`navbar ${navbarOpen ? 'active' : ''}`}>
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
          <img src={`${process.env.PUBLIC_URL}/cam1view.webp`} alt="Camera 1 View" />
          <button>View Camera</button>
        </div>
        <div className="box">
          <h3>Camera 2</h3>
          <img src={`${process.env.PUBLIC_URL}/cam2view.webp`} alt="Camera 2 View" />
          <button>View Camera</button>
        </div>
        <div className="box">
          <h3>Camera 3</h3>
          <img src={`${process.env.PUBLIC_URL}/cam3view.webp`} alt="Camera 3 View" />
          <button>View Camera</button>
        </div>
        <div className="box">
          <h3>Camera 4</h3>
          <img src={`${process.env.PUBLIC_URL}/cam4view.webp`} alt="Camera 4 View" />
          <button>View Camera</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <img src={`${process.env.PUBLIC_URL}/gov-logo.png`} alt="Gov Logo" className="footer-logo" />
          <p>
            © 2024 Government of India. All Rights Reserved.
          </p>
          <ul className="footer-links">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default SurveillancePage;
