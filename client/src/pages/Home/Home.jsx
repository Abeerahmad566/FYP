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
import Auth from "../../components/Auth";

 const Home=()=> {
   
   useEffect(()=>{
Aos.init({ duration:2000});
   },[])
   
  const [userid,setuserid]=useState(userService.getLoggedInUser()._id)
   const [informations, setInformations] = useState([])
  
   const getdata=()=>{
      // {userService.isLoggedIn()&& setuserid(userService.getLoggedInUser()._id)}
      // console.log(userid)

      InformationService
                  .getInformation(userid)
                  .then((data) => {
                    console.log(data);
                  setInformations(data)
                  setuserid("")
                  console.log(userid)
                  })
                  .catch((err) => {
                    console.log(err);
                    console.log(userid)
                  });
   }
      
   React.useEffect(getdata, []);
   
   return(
   <div>
   <TopBar/>
   <div className="homepagepic">
      <p className="txt" data-aos='fade-left'>Lending Data Prediction</p>
   </div>
   <div>
   <Button href="predictionPage" className="Button" variant="primary">Make Prediction</Button>
   {informations&&
   
   <Table striped bordered hover>
   <thead>
    <tr>
      <th>Age</th>
      <th>Income</th>
      <th>Car Ownership</th>
      <th>Current House Years</th>
      <th>Profession</th>
      <th>Current Job Years</th>
      <th>Legal Status</th>
      <th>Experience</th>
      <th>House Ownership</th>
      <th>Prediction Result</th>
    </tr>
  </thead>
  </Table>
  }
  {informations&& informations.map((information)=>(
            <SingleInformation information={information} />
         ))}

   </div>
   </div>
   );
}

export default Home;