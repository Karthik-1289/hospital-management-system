import React from 'react'
import {Link } from 'react-router-dom'
import '../App.css'

const Sidebar = () => {
  return (
    <div id='sidebar'>
        <ul>
        <li>
          <div id="sidelogo">Coapps</div>
        </li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/doctordetails">Doctor List</Link></li>
        <li><Link to="/patientdetails">Paitent List</Link></li>
        <li><Link to="/doctor">Add Doctor</Link></li>
        <li><Link to="/addpatient">Book Appointment</Link></li>
        <li><Link to="/">User Login</Link></li>
      </ul>

    </div>
  )
}

export default Sidebar