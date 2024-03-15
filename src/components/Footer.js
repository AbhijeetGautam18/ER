import React from 'react';
import './Footer.css';  // Importing CSS for styling
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';  // Importing icons

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Connect with me:</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/abhijeet-gautam18" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/AbhijeetGautam18" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:gautamabhijeet48@gmail.com">
            <FaEnvelope />
          </a>
        </div>
        <p>© Created by Abhijeet Gautam. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
