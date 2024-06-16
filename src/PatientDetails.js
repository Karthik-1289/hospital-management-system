import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'
import Sidebar from './Component/Sidebar';
const PatientDetails = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/patient/');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const handleDelete = async (id) => {
      try {
          await axios.delete(`http://localhost:8000/patient/${id}/`);
          setData(data.filter(item => item.id !== id)); 
      } catch (error) {
          console.error('Error deleting data:', error);
      }
  };

    

    return (
        <div className='data-table-container' >
          <Sidebar/>
            <h2><center>PATIENT DETAILS</center></h2>
            <table className='data-table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Relative Name</th>
                        <th>Relative Address</th>
                        <th>Department</th>
                        <th>Doctor Name</th>
                        <th>Date</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map(patient => (
                        <tr key={patient.id}>
                        <td>{patient.id}</td>
                        <td>{patient.names}</td>
                        <td>{patient.gender}</td>
                        <td>{patient.age}</td>
                        <td>{patient.address}</td>
                        <td>{patient.phone}</td>
                        <td>{patient.relative_name}</td>
                        <td>{patient.relative_address}</td>
                        <td>{patient.department}</td>      
                        <td>{patient.doctor_name}</td>
                        <td>{patient.date}</td>
                        <td>
                                <button onClick={() => handleDelete(patient.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientDetails;


