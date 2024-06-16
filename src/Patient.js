import React , { useState} from 'react'
import Sidebar from './Component/Sidebar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Patient = () => {
  const navigate = useNavigate()

  const [doctorData,setDoctorData]=useState({
  names:"",
  gender:"",
  age:"",
  address:"",
  phone:"",
  relative_name:"",
  relative_address:"",
  department:"",
  doctor_name:"",
  date:"",
  id:""
  })
  
  const handleChange = (e) =>{
    const { name , value } = e.target;
    setDoctorData(prevState =>({
      ...prevState,
      [name]:value
    }));
  };
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:8000/patient/', doctorData);
      console.log('Data submitted:',response.data);
      alert("Appointmnet Success");
      navigate('/patientdetails');
    }catch(error){
      console.error('Error submitting Admin data:',error);
  
    }
  };
  return (
    <div>
      <h1><center>PATIENT DETAILS </center> </h1>
      <Sidebar/>
      <div style={{marginLeft:'22%',padding:'1%',}}>
        <center>
          <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:'5%',marginRight:'10%'}}>
            <label>Name</label>
            <input onChange={handleChange} name='names' value={FormData.names} placeholder='Enter name '></input>
            <label>Gender</label> 
            <select onChange={handleChange} name='gender' value={FormData.gender} style={{display:'flex'}}>
            <option value="male"> MALE </option> 
            <option value="female"> Female </option> 
            </select>
            <label>Age</label>
            <input onChange={handleChange} name='age' value={FormData.age}  placeholder='Enter age'></input>
            <label>Address</label>
            <input onChange={handleChange} name='address' value={FormData.address} placeholder='Enter address'></input>
            <label>Phone</label>
            <input onChange={handleChange} name='phone' value={FormData.phone} placeholder='Enter Phone'></input>
            <label>Relative name </label>
            <input onChange={handleChange} name='relative_name' value={FormData.relative_name} placeholder='Enter Relative name '></input>
            <label>Relative address</label>
            <input onChange={handleChange} name='relative_address' value={FormData.relative_address} placeholder='Enter Relative address'></input>
            <label>Doctor</label>
            <input onChange={handleChange} name='doctor_name' value={FormData.doctor_name} placeholder='Enter doctor name'></input>
            <label>Department</label>
            <input onChange={handleChange} name='department' value={FormData.department} placeholder='Enter doctor name'></input>
            <label>Date</label>
            <input onChange={handleChange} name='date' value={FormData.date} placeholder='yyyy-mm-dd'></input>
            <label>ID</label>
            <input onChange={handleChange} name='id' value={FormData.id} placeholder='Enter doctor name'></input>
            <center><button type='submit'>Submit</button></center>
          </form>
        </center>
      </div>
    </div>
  )
}

export default Patient;