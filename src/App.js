import React  from 'react'
import {  Routes , Route , } from "react-router-dom";
import Patient from "./Patient";
import Home from './Home';
import Doctor from './Doctor';
import UserLogin from './UserLogin';
import AddLogin from './AddLogin';
import Admin from './Admin';
import AddAdmin from './AddAdmin';
import AdminHome from './AdminHome';
import User from './User';
import About from './About';
import AddAppointment from './AddAppointment';
import Contact from './Contact';
import DoctorDetails from './DoctorDetails'
import PatientDetails from './PatientDetails'


export const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<UserLogin/>}></Route>
          <Route path="/addlogin" element={<AddLogin/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/addpatient" element={<Patient/>}></Route>
          <Route path="/doctor" element={<Doctor/>}></Route>
          <Route path="/addlogin" element={<AddLogin/>}></Route>
          <Route path="/addadmin" element={<AddAdmin/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/user" element={<User/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/patientdetails" element={<PatientDetails/>}></Route>
          <Route path="/userhome" element={<AdminHome/>}></Route>
          <Route path="/appointment" element={<AddAppointment/>}></Route>
          <Route path="/doctordetails" element={<DoctorDetails/>}></Route>
      </Routes>
    </div>
  )
}
export default App;