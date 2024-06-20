import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HeadComp from './Component/HeadComp';

const UserLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        user_name: '',
        email_id: '',
        user_id: '',
        password: '',
    });

    const { user_name, email_id, user_id, password } = formData;

    // Function to update form data when inputs change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send login credentials to the backend for authentication
            const response = await axios.post('http://localhost:8000/login/', formData);

            if (response.status === 200) {
                // Authentication successful
                console.response('Error logging in:', response);
            alert('Error logging in. Please try again.');
               // Redirect to user page after successful login
            } 
        } catch (error) {
          console.log('Login successful:',error);
          alert('Login successful!');
          navigate('/user'); 
        }
    };

    return (
        <div>
          <HeadComp/>
            <div style={{ backgroundColor: 'lightblue', marginTop: '5%' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '15%', marginRight: '10%' }}>
                    <h1 style={{ textAlign: 'center' }}>User Login</h1>
                    <label>Username</label>
                    <input onChange={handleChange} name="user_name" value={user_name} placeholder='Enter Username' /><br />
                    <label>Email ID</label>
                    <input onChange={handleChange} name="email_id" value={email_id}  placeholder='Enter Email ID' /><br />
                    <label>User ID</label>
                    <input onChange={handleChange} name="user_id" value={user_id} placeholder='Enter User ID' /><br />
                    <label>Password</label>
                    <input onChange={handleChange} name='password' value={password} placeholder='Enter Password' /><br />
                    <section>
                        <button type='submit'>Submit</button>
                        <a style={{ marginLeft: '3%' }} href='./addlogin'>New User</a>
                        <a style={{ marginLeft: '3%' }} href='./admin'>Admin</a>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default UserLogin;
