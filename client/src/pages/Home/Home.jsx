import TopBar from "../TopBar/Topbar";
import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './home.css';
export default function Home() {
   useEffect(()=>{
Aos.init({ duration:2000});
   },[])
   return(
   <div>
   <TopBar/>
   <div className="homepagepic">
      <p className="txt" data-aos='fade-right'>Lending Data Prediction</p>
   </div>
   <div>
   <Button href="predictionPage" className="Button" variant="primary">Make Prediction</Button>
   </div>
   </div>
   );
}