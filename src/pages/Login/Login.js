import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  // Correctly initialize useState
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/Login",formData);
  };

  return (
    <div className="login-container">
      <div className="login-card glass-effect">
        <h2 className="login-title">Welcome Back</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="email"
              name="email" // Add name attribute
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password" // Add name attribute
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="signup-prompt">
          Don't have an account? <Link to="/SignUp">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
