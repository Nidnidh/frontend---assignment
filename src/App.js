import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import CandidateHome from './components/Candidate/CandidateHome';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/candidate/home" element={
        localStorage.getItem('user') ? <CandidateHome /> : <Navigate to="/login" />
      } />
    </Routes>
  </Router>
);

export default App;
