// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import DoctorBooking from './pages/DoctorBooking';
import Home from './pages/Home';
import Navbar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <Navbar />      
      <Routes>
        <Route path="/" element={<Login />} />
        <>
        <Route path="/home" element={<Home />} />
        {/* <Route path="/book-doctor/:doctorId" element={<DoctorBooking />} /> */}
        <Route path="/book-doctor/:doctorId/:slotDate?" element={<DoctorBooking />} />
        </>
      </Routes>
    </Router>
  );
};

export default App;
