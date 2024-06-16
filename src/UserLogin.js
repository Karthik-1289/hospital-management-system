import React, { useState } from 'react';
import {  useNavigate  } from 'react-router-dom';
import HeadComp from './Component/HeadComp';
import axios from 'axios'

const UserLogin = () => {
  const navigate = useNavigate()

const [doctorData,setDoctorData]=useState({
  username:"",
  password:"",
  user_id:"",
  email_id:""
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
    <div style={{backgroundColor:'lightblue',marginTop:'5%'}}>
<form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'15%',marginRight:'10%'}}>
 <label><h1 style={{textAlign:'center'}}>User Login </h1></label>
  <label>Username </label>
  <input onChange={handleChange} name="username" value={FormData.username} placeholder='Enter Username'/><br/>
  <label>User ID </label>
  <input onChange={handleChange} name="user_id" value={FormData.user_id} placeholder='Enter User ID'/><br/>
  <label>Email ID </label>
  <input onChange={handleChange} name="email_id" value={FormData.email_id} placeholder='Enter Email ID'/><br/>
  <label>Password </label>
  <input onChange={handleChange} name='password' value={FormData.password} placeholder='Enter Password'/><br/>
  <section ><button type='submit'>Submit</button>
  <a style={{marginLeft:'3%'}} href='./addlogin'>New User</a>
  <a style={{marginLeft:'3%'}} href='./admin'>Admin</a></section>
</form>
</div>
    </div>
  )
}

export default UserLogin


