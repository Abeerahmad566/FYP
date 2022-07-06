import './About.css';
import about from "./about.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
export default function (){
    useEffect(()=>{
        Aos.init({ duration:2000});
           },[])
    return(
        <div  id="aboutus">
        <div className="aboutus">
            <div className="row">
    
                <div className="col-sm">
                <div data-aos="fade-up">
                    <div className="container">
                <img className="aboutimgWrapper" src={about}></img>
                </div>
                </div>
                </div>
              
                <div className="col-sm">
                <div data-aos="fade-up">
                
                    <h2>About Us</h2>
                    <p className='colp'>Loan Predicton is a Webiste For Predicting your Loan Status</p>
                    <p className='colp'>A person can predict his loan status by just visiting Website and 
                    entering required information. By our Website there will be no influence of employees 
                    and also Time of user will save and workload from bank employees will become less</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}