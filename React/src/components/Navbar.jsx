import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">GetNet</div>
            <ul className="nav-links">
            <li><Link to = 'Login'>Login</Link></li>
            <li><Link to = '/'>Sign Up</Link></li>
            <li><Link to = 'Dashboard'>Dashboard</Link></li>
            <li><Link to = 'CreateEvent'>Create Event</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
