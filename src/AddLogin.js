import React , {useState} from 'react';
import {  useNavigate  } from 'react-router-dom';
import axios from 'axios'
import HeadComp from './Component/HeadComp';

const AddLogin =()=>{
const navigate = useNavigate()

const [doctorData,setDoctorData]=useState({
  user_name:"",
  user_id:"",
  email_id:"",
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
    const response = await axios.post('http://localhost:8000/login/', doctorData);
    console.log('Data submitted:',response.data);
    navigate('/user');
  }catch(error){
    console.error('Error submitting Admin data:',error);

  }
};

    return (
       <div>
        <HeadComp/>
    <div style={{backgroundColor:'lightblue'}}>
<form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'22%',marginRight:'10%'}} >
 <label><h1 style={{textAlign:'center'}}>User Sign up </h1></label>
  <label>Username </label>
  <input value={FormData.user_name} onChange={handleChange} name='user_name' placeholder='Enter Username'/><br/>
  <label>User ID </label>
  <input value={FormData.user_id} onChange={handleChange} name='user_id'  placeholder='Enter User ID'/><br/>
  <label>Email ID </label>
  <input value={FormData.email_id} onChange={handleChange} name='email_id'  placeholder='Enter Email ID'/><br/>
  <label>Password </label>
  <input value={FormData.password} onChange={handleChange} name='password' placeholder='Enter Password'/><br/>
  <section><button type='submit'>Submit</button></section>
</form>
    </div>
    </div>
  )
}

export default AddLogin;