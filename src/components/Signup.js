// Importing relevant components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import './Signup.css'; // Importing styles for Signup page 

const Signup = () => {
  // State variables for storing form data and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const isValidEmail = validateEmail(email);
    if (!name || !email || !password) {
      setWarningMessage('Please fill in all fields');
    } else if (!isValidEmail) {
      setWarningMessage('Please enter a valid email address');
    } else {
      alert(`Welcome, ${name}!`); // Alert message on successful signup
      window.location.href = '/Dashboard';  // Redirect to dashboard page
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="signup-page">
        <div className='forms'>
        <h2>Signup</h2><br/>
        <form onSubmit={handleSubmit}>
          {/* Input fields for name, email, and password */}
          <div className="form-group">
            <label>Name: (use 'Demo')</label><br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email: (use 'Demo@gmail.com'</label><br />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            {emailError && <span className="error-message">{emailError}</span>}
          </div>
          <div className="form-group">
            <label>Password: (use 'Demo')</label><br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Signup</button>
          {warningMessage && <p className="warning-message">{warningMessage}</p>} {/* Display warning message */}
          <p>Already have an account? <Link to='/Login'>Login</Link></p>
        </form>
      </div>
      </div>
  );
};

export default Signup;
