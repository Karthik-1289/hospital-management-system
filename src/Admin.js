import React, { useState , useEffect } from 'react';
import {  useNavigate  } from 'react-router-dom';
import HeadComp from './Component/HeadComp';
import axios from 'axios'

const Admin = () => {
const navigate = useNavigate()

// const [doctorData,setDoctorData]=useState({
//   admin_id:"",
//   username:"",
//   password:""
// })

// const handleChange = (e) =>{
//   const { name , value } = e.target;
//   setDoctorData(prevState =>({
//     ...prevState,
//     [name]:value
//   }));
// };

// const handleSubmit = async(e)=>{
//   e.preventDefault();
//   try{
//     const response = await axios.get('http://localhost:8000/admind/', doctorData);
//     console.log('Data submitted:',response.data);
//     navigate('/home');
//   }catch(error){
//     console.error('Error submitting Admin data:',error);

//   }
// };
const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/doctor/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

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
    const handleSubmit = async (admin_id) => {
      try {
        await axios.delete(`http://localhost:8000/admind/${admin_id}/`);
        setData(data.filter(item => item.admin_id !== admin_id)); 
        
      }catch (error) {
        console.error('Error data:', error);
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
  <input value={FormData.username} name="username" onChange={handleChange} placeholder='Enter Username' /><br/>
  <label>Password </label>
  <input value={FormData.password}  name="password" onChange={handleChange}  placeholder='Enter Password' /><br/>
  <section><button  type='submit'>Submit</button>
  </section>

</form>
</div>
    </div>
  );
}

export default Admin;