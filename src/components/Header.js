import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importing Link from 'react-router-dom' for navigation
import './Header.css'; // Importing styles for the Header component

const Header = () => {
  // State variables to manage the visibility of navigation and dropdown menu
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  // Function to toggle the visibility of the navigation menu
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  // Function to toggle the visibility of the user dropdown menu
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Function to handle user sign out
  const handleSignOut = () => {
    window.location.href = '/login'; // Redirecting to the login page when signing out
  };

  return (
    <header className="header">
      <div className="left-section">
        <button className="menu-button" onClick={toggleNav}>  {/*Button to toggle navigation menu visibility*/}          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
        <div className="logo">Gautam Lighting Solutions ERP System</div>  {/* Enterprise Name */}
      </div>
      <div className="right-section">
        <div className="dropdown">      {/* Dropdown menu for user */}
          <button className="user-icon" onClick={toggleDropdown}>User</button>
          {showDropdown && (
            <div className="dropdown-content">  {/* Displaying dropdown content when showDropdown state is true */}
              <button onClick={handleSignOut}>Sign Out</button>     {/* Button to sign out */}
            </div>
          )}
        </div>
      </div>

      {/* Navigation menu displayed when showNav state is true */}
      {showNav && (
        <nav className="navbar">
          <ul>
            {/* Links to various pages of the application */}
            <li><Link to="/Dashboard">Dashboard</Link></li>
            <li><Link to="/ProductManagement">Product Management</Link></li>
            <li><Link to="/OrdersManagement">Order Management</Link></li>
            <li><Link to="/Login">Sign Out</Link></li> {/* Link to sign out */}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
