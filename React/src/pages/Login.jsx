import React, { useState }from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Navigate} from 'react-router-dom';
import axios from 'axios';
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userData = { email, password};

      const response = await axios.post('http://localhost:5000/api/user/login', userData);
      
      console.log(response); 
      alert('Logged in successfully');
      navigate("/dashboard");
    }
    catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('An unexpected error occurred');
      }
    }
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
      <div className="register-container">
        <h2>Sign In</h2>
        <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <button type="submit" className="register-btn">Login</button>
            <br/>
            <div className="already-registered">
            <h3>Not registered?</h3>
            <Link to="/" className="login-link">Register</Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Login
