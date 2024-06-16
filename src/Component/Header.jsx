import React from 'react'
import {  Link  } from 'react-router-dom'
import '../App.css'

const Header = () => {
  return (
<div id="navbar">
      <div id="logo">Coapps</div>
      <ul>
        <li><Link to="/">Add Profile</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Book Appointment</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        <li><Link to="/user">Home</Link></li>
      </ul>
    </div>
  )
}

export default Header;
