import React , {useState} from 'react'
import Sidebar from './Component/Sidebar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Doctor = () => {
  const navigate = useNavigate();
const [doctorData,setDoctorData] = useState({
    dr_code:"",
    dr_name:"",
    gender:"",
    date_of_birth:"",
    address:"",
    date_of_join:"",
    designation:"",
    phone:"",
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
    const response = await axios.post('http://localhost:8000/doctor/', doctorData);
    console.log('Data submitted:',response.data);
    alert("Doctor details added Successfully");
    navigate('/doctordetails');
  }catch(error){
    console.error('Error submitting Admin data:',error);

  }
};
  
  return (
    <div>
      <Sidebar/>
        <h2><center>ADD DOCTOR DETAILS</center></h2>
        <div onSubmit={handleSubmit} style={{marginLeft:'22%',padding:'1%',}}>
        <center>
            <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'space-between',marginLeft:'5%',marginRight:'10%'}}>
                <label>Doctor Code</label>
                <input name="dr_code" value={FormData.dr_code} onChange={handleChange} placeholder='Enter doctor code'></input>
                <label>Doctor Name </label>
                <input name="dr_name" value={FormData.dr_name} onChange={handleChange} placeholder='Enter doctor name'></input>
                <label>Gender</label>
                <input name="gender" value={FormData.gender} onChange={handleChange} placeholder='Enter gender'/>
                <label>Date of Birth</label>
                <input name="date_of_birth" value={FormData.date_of_birth} onChange={handleChange} placeholder='yyyy-mm-dd'></input>
                <label>Address</label>
                <input name="address" value={FormData.address} onChange={handleChange} placeholder='Enter address'></input>
                <label>Date of join </label>
                <input name="date_of_join" value={FormData.date_of_join} onChange={handleChange} placeholder='Enter date of join'></input>
                <label>Designation</label>
                <input name="designation" value={FormData.designation} onChange={handleChange} placeholder='Enter designation'></input>
                <label>Phone No</label>
                <input name='phone' value={FormData.phone} onChange={handleChange} placeholder='Enter phno'></input>
                <center><button type='submit'>Submit</button></center>
            </form>
        </center>
        </div>
    </div>
  )
}

export default Doctor;