import React, { useState } from 'react';
import {  useNavigate  } from 'react-router-dom';
import HeadComp from './Component/HeadComp';
import axios from 'axios'

const AddAdmin = () => {
const navigate = useNavigate()

const [doctorData,setDoctorData]=useState({
  admin_id:"",
  username:"",
  password:""
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
    const response = await axios.post('http://localhost:8000/admind/', doctorData);
    console.log('Data submitted:',response.data);
    navigate('/home');
  }catch(error){
    console.error('Error submitting Admin data:',error);

  }
};
  return (
    <div>
        <HeadComp/>
        <div style={{top:'3%',backgroundColor:'lightblue'}}>
<form  onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'22%',marginRight:'10%'}}>
 <label><h1 style={{textAlign:'center'}}>Admin Sign Up </h1></label>
 <label>Admin ID </label>
 <input value={FormData.admin_id} onChange={handleChange} name="admin_id" placeholder='Enter User ID' /><br/>
  <label>Username </label>
  <input value={FormData.username} name="username" onChange={handleChange}  placeholder='Enter Username' /><br/>
  <label>Password </label>
  <input value={FormData.password}  name="password" onChange={handleChange}  placeholder='Enter Password' /><br/>
  <section><button  type='submit'>Submit</button>
  <a href='/admin'>Admin Login</a></section>

</form>
</div>
    </div>
  );
}

export default AddAdmin