// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import DoctorSlotList from './pages/DoctorSlotList/DoctorSlotList';
import Home from './pages/Home';
import Navbar from './components/NavBar';
import { PrivateRoute } from './components/PrivateRoute';
import { selectUser } from './store/authSlice';
import { useSelector } from 'react-redux';
import SlotBooking from './pages/SlotBooking/SlotBooking';

const App = () => {
  const userData = useSelector(selectUser);

  return (
    <Router>
      {userData?.token ? <Navbar /> : <></>}
      <Routes>
        <Route path="/login" element={<Login />} />
        
          <Route path="/home" element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>} 
          />
          <Route path="/book-doctor-list/:doctorId/:slotDate?" element={
            <PrivateRoute>
              <DoctorSlotList />
            </PrivateRoute>} 
          />
          <Route path="/slot-booking" element={
            <PrivateRoute>
              <SlotBooking />
            </PrivateRoute>} 
          />
      </Routes>
    </Router>
  );
};

export default App;
