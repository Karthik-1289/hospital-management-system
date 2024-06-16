import React from 'react';
import index1 from './images/index1.jpg';
import image3 from './images/image3.jpg';
import Header from './Component/Header'


const About = () => {
  return (
    <div style={{display:'flex', padding:'0%',marginTop:'10%',flexDirection:'column'}}>
      <Header/>
      <h1><center>ABOUT US</center> </h1>
      <div style={{display:'flex',margin:'1%',padding:'0%',backgroundColor:'lightblue'}}>
      <img style={{height:'200px',margin:'2%',padding:'0%'}} src={index1}></img>
      <p style={{padding:'1%',marginRight:'10%'}}>Hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching.Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. Thus, people in these countries do not always receive the benefits of modern medicine, public health measures, or hospital care, and they generally have lower life expectancies.</p>
      </div>
      <div  style={{display:'flex',padding:'0%',margin:'1%',backgroundColor:'lightblue'}}>
        <img style={{height:'200px',margin:'2%',padding:'0%',width:'100%'}} src={image3}></img>
        <p style={{padding:'1%',marginRight:'10%'}}>In developed countries the hospital as an institution is complex, and it is made more so as modern technology increases the range of diagnostic capabilities and expands the possibilities for treatment. As a result of the greater range of services and the more-involved treatments and surgeries available, a more highly trained staff is required. A combination of medical research, engineering, and biotechnology has produced a vast array of new treatments and instrumentation, much of which requires specialized training and facilities for its use. Hospitals thus have become more expensive to operate, and health service managers are increasingly concerned with questions of quality, cost, effectiveness, and efficiency.</p>
      </div>
    </div>
  )
}

export default About;