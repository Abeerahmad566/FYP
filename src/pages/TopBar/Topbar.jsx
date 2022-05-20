import "./Topbar.css";
import logo from '../img/logo.png';
import homepage from "../img/homepage.jpg"
import userService from "../../services/UserService";
import {Navbar,Container,Nav} from "react-bootstrap"
import { Button } from "@material-ui/core";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import HomeIcon from '@mui/icons-material/Home';
import nophoto from "../img/nophoto.jpg"
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import LogoutIcon from '@mui/icons-material/Logout';
export default function Topbar(props) {
 const {user,history}=props
    return(
<div >
  
<Navbar bg="primary" variant="dark" expand="xl" >
 
    <Navbar.Brand  href="/home"><img className="logo" src={logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <Nav.Link className="Hometxt" style={{marginLeft: '20%' }}href="/home"><HomeIcon className="homeicon"></HomeIcon>Home</Nav.Link>
        
        <Nav.Link className="predicttxt"  style={{marginLeft: '20%' }} href="/predictionPage"><OnlinePredictionIcon className="onlinepredictionicon" ></OnlinePredictionIcon>Predict</Nav.Link>
        <Nav.Link className="Contacttxt" style={{marginLeft: '20%' }} href="/contact"><ConnectWithoutContactIcon className="connect" ></ConnectWithoutContactIcon>Contact</Nav.Link>
        

      </Nav>
    <Nav.Link  style={{marginLeft: '20%'}} href="/profile"><img className="profileimg" src={user.photo? "http://localhost:4000/"+user.photo:nophoto}/></Nav.Link>
   <Nav.Link  onClick={(e) => {
            userService.logout();
            window.location.href = "/login";
          }}
         ><LogoutIcon className="logouticon"></LogoutIcon><p className="dropbtn">Logout</p>
           </Nav.Link>
    </Navbar.Collapse>
  
</Navbar>
       
    
     
    </div>
    );
}