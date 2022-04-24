import TopBar from "../TopBar/Topbar";
import React, { useEffect,useState } from 'react';
import Button from 'react-bootstrap/Button'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './home.css';
import {Table} from "react-bootstrap"
import userService from "../../services/UserService";
import InformationService from "../../services/InformationService";
import SingleInformation from "../SingleInformation/SingleInformation"
import mainimg from "../img/homepage.jpg"
import { Grid } from "@material-ui/core";
import Footer from "../../components/Footer/Footer";

 const Home=()=> {
   
   useEffect(()=>{
Aos.init({ duration:2000});
   },[])
   
  const [userid,setuserid]=useState(userService.getLoggedInUser()._id)
   const [informations, setInformations] = useState([""])
  
   const getdata=()=>{


      InformationService
                  .getInformation(userid)
                  .then((data) => {
                  setInformations(data)
                  setuserid("")
                 
                  })
                  .catch((err) => {
                    console.log(err);
                   
                  });
   }
      
   React.useEffect(getdata, []);
   
   return(
     
   <div>
   <TopBar/>
  
   <div className="homepagepic">
    
    <p className="txt" data-aos='fade-left'>Lending Data Prediction</p>
 </div>
  
   <div className="container">
   <div className="tableWrapper">
  <Grid container justify="center">
 
   <Button href="predictionPage" className="btnwrapper" variant="primary">Make Prediction</Button>
   
   </Grid>
   {informations.length >0 &&
   
   <Table striped bordered hover>
   <thead>
    <tr>
      <th>Age</th>
      <th>Income</th>
      <th>Car Ownership</th>
      <th>RelationShip Status</th>
      <th>Current House Years</th>
      <th>Profession</th>
      <th>Current Job Years</th>
      <th>Experience</th>
      <th>House Ownership</th>
      <th>Prediction Result</th>
    </tr>
  </thead>
  <tbody>
  {informations&& informations.map((information)=>(
            <SingleInformation information={information} />
         ))}
  </tbody>
  </Table>
  
  }
  

   </div>
   </div>
   <Footer/>
   </div>
   );
}

export default Home;