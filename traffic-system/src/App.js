// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SurveillancePage from './SurveillancePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/surveillance" element={<SurveillancePage />} />
      </Routes>
    </Router>
  );
}

export default App;
