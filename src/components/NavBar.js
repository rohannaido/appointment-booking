import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './navBar.css'; // Import the CSS file for styling
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../store/authSlice';
import { logout } from '../store/authSlice';


const Navbar = () => {
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <span>Book Appointment</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link>{userData}</Link>
        </li>
        <li>
          <Link onClick={handleLogout} to="/login">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
