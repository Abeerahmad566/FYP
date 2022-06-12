
import './home.css';
import TopBar from "../TopBar/Topbar";
import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button'
import Aos from 'aos';
import 'aos/dist/aos.css';

import {Table,Carousel} from "react-bootstrap"
import userService from "../../services/UserService";
import InformationService from "../../services/InformationService";
import SingleInformation from "../SingleInformation/SingleInformation"
import mainimg from "../img/homepage.jpg"
import secondimg from "../img/secondimg.jpg"
import thirdimg from "../img/thirdimg.jpg"
import { Grid } from "@material-ui/core";
import Footer from "../../components/Footer/Footer";

 const Home=()=> {
   
   useEffect(()=>{
Aos.init({ duration:2000});
   },[])
   
  const [userid,setuserid]=useState(userService.getLoggedInUser()._id)
   const [informations, setInformations] = useState([""])
  const role = userService.getLoggedInUser().role;
   const getdata=()=>{
      InformationService
                  .getInformation(userid)
                  .then((data) => {
                  setInformations(data)               
                  })
                  .catch((err) => {
                    console.log(err);
                   
                  });
   }
      
   React.useEffect(getdata, []);
   const [users, setusers] = useState([""])
   const getuserdata=()=>{
    userService
                .getUser(userid)
                .then((data) => {  
                setusers(data)
               
                })
                .catch((err) => {
                  console.log(err);
                 
                });
 }
useEffect(getuserdata, []);
   return(
     
   <div>
     {users&&users.map((user)=>(<TopBar user={user}/>))}
   
  

     <Carousel>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={mainimg}
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={secondimg}
      alt="Second slide"
    />
    
  </Carousel.Item>
  
</Carousel>

  
   <div className="container">
   
  <Grid container justify="center">
 
   <button  className='makeprediction'><a className='makeprediction' href="/predictionPage">Make Prediction</a></button>
  
   
   </Grid>
   {role=='user'&&
  <>
   {informations.length==0 &&
   <p style={{paddingTop:'30px'}}><b className='bold'>No Previous Predictions</b></p>}
   {informations.length >0 &&
   <><p style={{ paddingTop: '30px' }}><b className='pbold'>Previous Predictions</b></p><div className="tableWrapper">
             <Table striped bordered hover>
               <thead>
                 <tr>
                   <th><b>Age</b></th>
                   <th><b>Income</b></th>
                   <th><b>Car Ownership</b></th>
                   <th><b>RelationShip Status</b></th>
                   <th><b>Current House Years</b></th>
                   <th><b>Profession</b></th>
                   <th><b>Current Job Years</b></th>
                   <th><b>Experience</b></th>
                   <th><b>House Ownership</b></th>
                   <th><b>Prediction Result</b></th>
                   <th><b>Status</b></th>
                   <th><b>Action</b></th>
                 </tr>
               </thead>
               <tbody>
                 {informations && informations.map((information) => (
                   <SingleInformation information={information} onDelete={getdata} />
                 ))}

               </tbody>
             </Table>
   
           </div></>
             
             }
</> 
 }
           </div>
  
   <Footer/>
   </div>
   );
}

export default Home;