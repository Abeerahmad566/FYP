import "./Team.css"
import abeerpic from "../../pages/img/abeer.jpg"
import somanpic from "../../pages/img/soman.jpg"
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
export default function Team (){
    useEffect(()=>{
        Aos.init({ duration:2000});
           },[])
    return(
        <div  id='team'>
        <div data-aos="zoom-in">
<div data-aos="zoom-in-up">
        <div className="team"> 
        <h2>Meet the Team</h2>
   
        
        <div className="row">
            <div className="col-sm">
               <img className="teamimg" src={abeerpic}></img>
               <h4 className="ah4">Abeer Ahmed</h4>
               <p className="ap">Mern Stack Developer</p>
                </div>
                <div className="col-sm">
                <img className="teamimgs" src={somanpic}></img>
               <h4 className="sh4">Soman Talha</h4>
               <p className="sp">Machine Learning Engineer</p>
            </div>
            </div>
            </div>
        </div>
        </div>
        </div>
        
    )
}