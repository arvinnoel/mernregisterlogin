import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const userData = { firstName, lastName, email, password, confirmPassword };

      const response = await axios.post('http://localhost:5000/api/user/register', userData);

      console.log(response.data); 
      alert('Registered successfully');
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || 'Failed to register');
      } else {
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
      <div className="register-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" name="firstname" placeholder="Enter your first name" value={firstName} onChange={(e) => setFirstname(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" name="lastname" placeholder="Enter your last name" value={lastName} onChange={(e) => setLastname(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Confirm Password</label>
            <input type="password" id="password2" name="password" placeholder="Enter your password again"  value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
          </div>
          <button type="submit" className="register-btn">Register</button>
          <br/>
          <div className="already-registered">
          <h3>Already registered?</h3>
          <Link to="/login" className="login-link">login</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
