import React, { useState } from 'react';
import './SignUp.css';
import {Link} from "react-router-dom";
import axios from 'axios';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';

const SignUp = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,    // Copy existing state
      [name]: value    // Overwrite specific property
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to backend)
    axios.post("http://localhost:5000/SignUp",formData);
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card glass-effect">
        <h2 className="signup-title">Create Your Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-prompt">
          Already have an account? <Link to="/Login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
