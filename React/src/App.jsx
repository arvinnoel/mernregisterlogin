import React from 'react'
import Register from'./pages/Register.jsx'
import './pages/Register.css'
import CreateEvent from './pages/CreateEvent.jsx'
import Login from './pages/Login.jsx'
import { Routes, Route } from 'react-router-dom'
import './components/Navbar.css'
import Navbar from './components/Navbar.jsx'
import Dashboard from './pages/Dashboard.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Register />} />
          <Route path="/CreateEvent" element={<CreateEvent />} />
        </Routes>
    </div>
  )
}

export default App
