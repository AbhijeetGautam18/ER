import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

const Navbar = () => {
  // State to manage the navbar expansion
  const [expanded, setExpanded] = useState(true);

  // Function to toggle the navbar expansion
  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`sidenav ${expanded ? 'expanded' : ''}`}>
      {/* Button to toggle the navbar */}
      <button className="toggle-btn" onClick={toggleNavbar}>
        {expanded ? <MenuIcon /> : <CloseIcon />} {/* Conditional rendering of menu icon or close icon based on navbar state */}
      </button>
      <ul className="sidenav-list"> {/* List of links in the navbar */}
        <li className="sidenav-item">
          <Link to="/Dashboard" className="sidenav-link">Dashboard</Link>
        </li>
        <li className="sidenav-item">
          <Link to="/ProductManagement" className="sidenav-link">Product Management</Link>
        </li>
        <li className="sidenav-item">
          <Link to="/OrdersManagement" className="sidenav-link">Order Management</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
