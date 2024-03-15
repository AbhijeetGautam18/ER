import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  // State variables for email, password, email error, and warning message
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [warningMessage, setWarningMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    const isValidEmail = validateEmail(email);
    if (!email || !password) {
      setWarningMessage('Please fill in all fields');
    } else if (!isValidEmail) {
      setWarningMessage('Please enter a valid email address');
    } else {
      alert('Login successful!'); // Display alert for successful login
      window.location.href = '/Dashboard';
    }
  };

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Regular expression for email validation
    return emailRegex.test(email);
  };

  return (
    <div className="login-page">
        <div className="login-container">
          <h2>Login</h2><br/>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email: (use 'Demo@gmail.com')</label><br />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              {emailError && <span className="error-message">{emailError}</span>} {/* Display error message for invalid email */}
            </div>
            <div className="form-group">
              <label>Password: (use 'Demo')</label><br />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
            {warningMessage && <p className="warning-message">{warningMessage}</p>} {/* Display warning message */}
            <p>Don't have an account? <Link to="/Signup">Signup</Link></p>
          </form>
        </div>
      </div>
  );
};

export default Login;
