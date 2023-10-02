// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import DoctorBooking from './pages/DoctorBooking/DoctorBooking';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import { PrivateRoute } from './components/PrivateRoute';
import { selectUser } from './store/authSlice';
import { useSelector } from 'react-redux';

const App = () => {
  const userData = useSelector(selectUser);

  return (
    <Router>
      {userData ? <Navbar /> : <></>}
      <Routes>
        <Route path="/login" element={<Login />} />
        
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} 
          />
          <Route path="/book-doctor/:doctorId/:slotDate?" element={
            <PrivateRoute>
              <DoctorBooking />
            </PrivateRoute>} 
          />
      </Routes>
    </Router>
  );
};

export default App;
