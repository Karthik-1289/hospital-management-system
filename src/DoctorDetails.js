import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Sidebar from './Component/Sidebar';
const DoctorDetails = () => {
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

    const handleDelete = async (dr_code) => {
      try {
          await axios.delete(`http://localhost:8000/doctor/${dr_code}/`);
          setData(data.filter(item => item.dr_code !== dr_code)); 
          console.error('Error deleting data:');
      }catch (error) {
        console.error('Error deleting data:', error);
    }
  };

    return (
        <div className='data-table-container' >
          <Sidebar/>
            <h2><center>DOCTOR DETAILS</center></h2>
            <table style={{marginLeft:'27%'}}className='data-table'>
                <thead>
                    <tr>
                    <th>Doctor Code</th>
                        <th>Doctor Name</th>
                        <th>Gender</th>
                        <th>Date Of Birth</th>
                        <th>Address</th>
                        <th>Date Of Join</th>
                        <th>Designation</th>
                        <th>Phone</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(doctor => (
                        <tr key={doctor.dr_code}>
                            <td>{doctor.dr_code}</td>
                            <td>{doctor.dr_name}</td>
                            <td>{doctor.gender}</td>
                            <td>{doctor.date_of_birth}</td>
                            <td>{doctor.address}</td>
                            <td>{doctor.date_of_join}</td>
                            <td>{doctor.designation}</td>
                            <td>{doctor.phone}</td> 
                            <td>
                                <button onClick={() => handleDelete(doctor.dr_code)}>Delete</button>
                            </td>                       </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DoctorDetails;
