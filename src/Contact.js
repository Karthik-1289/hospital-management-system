import React from 'react'
import index2 from './images/index2.jpg'
import index1 from './images/index1.jpg'
import Header from './Component/Header'

const Contact = () => {
  return (
    <div style={{marginTop:'8%'}}>
        <Header/>
        <div>
  <div style={{display:'flex',margin:'1%',padding:'2%',backgroundColor:'lightblue'}}>
    <div style={{display:'block',padding:'1%',marginRight:'0%',fontSize:'20px',fontStyle:'bold'}}><p><bold><ul style={{marginRight:'43%',margin:'2%',display:'block'}}><li>Email : coappshospitals@gmail.com</li><li>Phone No : +91 684684698</li><li>Address : 5-403/2 Kesireddynagar , Chennai Branch , Tamilnadu - 605001</li></ul></bold></p></div>
    
    <div><img style={{height:'300px'}} src={index1}></img></div>
  </div></div>
  
    </div>
  )
}

export default Contact