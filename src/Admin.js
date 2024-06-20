import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadComp from './Component/HeadComp';

const Admin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        admin_id: '',
        password: '',
    });

    const { username, admin_id, password } = formData;

    // Function to update form data when inputs change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login credentials to the backend for authentication
            const response = await axios.post('http://localhost:8000/admind/', formData);

            if (response.status === 200) {
                // Authentication successful
                console.response('Error logging in:', response);
            alert('Error logging in. Please try again.');
               // Redirect to user page after successful login
            } 
        } catch (error) {
          console.log('Login successful:',error);
          alert('Login successful!');
          navigate('/home'); 
        }
    };

 
  return (
    <div>
        <HeadComp/>
        <div style={{top:'3%',backgroundColor:'lightblue'}}>
<form  onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column',justifyContent:'center',marginLeft:'22%',marginRight:'10%'}}>
 <label><h1 style={{textAlign:'center'}}>Admin Sign Up </h1></label>
 <label>Admin ID </label>
 <input value={admin_id} onChange={handleChange} name="admin_id" placeholder='Enter User ID' /><br/>
  <label>Username </label>
  <input value={username} name="username" onChange={handleChange} placeholder='Enter Username' /><br/>
  <label>Password </label>
  <input value={password}  name="password" onChange={handleChange}  placeholder='Enter Password' /><br/>
  <section><button  type='submit'>Submit</button>
  </section>

</form>
</div>
    </div>
  );
}

export default Admin;
