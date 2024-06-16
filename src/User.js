import React from 'react'
import Header from './Component/Header'
import index1 from './images/index1.jpg'
import index2 from './images/index2.jpg'

const User = () => {
  return (
    <div>
      <Header/>
      <body style={{marginTop:'8%'}}>
<div>
<div>
  <div style={{display:'flex',margin:'1%', padding:'2%',backgroundColor:'lightblue'}}>
    <div style={{marginLeft:'0%'}}><img style={{height:'300px'}} src={index2}></img></div>
    <div style={{display:'block',padding:'2%',fontStyle:'bold',fontSize:'20px',marginLeft:'0%'}}><p><bold>Adopt our digital healthcare ecosystem for a holistic approach towards patient management. Our patient management system comes with a wide range of features like managing multi-chain facilities centrally, appointment scheduling portals for patients, feedback collection channels, maintaining Electronic Health Records EHR, tracking pharmacy operations and stocks, LIS for in-house pathology and radiology diagnostics.</bold></p></div>
  </div>
  <div style={{display:'flex',margin:'1%',padding:'2%',backgroundColor:'lightblue'}}>
    <div style={{display:'block',padding:'2%',marginRight:'0%',fontSize:'20px',fontStyle:'bold'}}><p><bold>We are passionate about our patients’ well-being and we’ll be your guide on your path to recovery experienced at BBH. Patients at BBH, will feel a safe and comfortable environment that supports rest and healing. Listed below are our services and facilities to help you familiarise with our hospital to make your visit or stay with us as smooth and comfortable. We have 6 departments in our hospital.</bold></p></div>
    <div style={{marginLeft:'0%'}}><img style={{height:'300px'}} src={index1}></img></div>
  </div>
  
</div>
</div>
</body>
    </div>
  )
}

export default User;