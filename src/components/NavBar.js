import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import './navBar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <span>Book Appointment</span>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
