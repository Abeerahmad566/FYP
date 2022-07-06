import "./Topbar.css";
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect,useState } from 'react';
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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
export default function Topbar(props) {
 const {user,history}=props

 const role = userService.getLoggedInUser().role;


 
   

     return(
<div >
  
<Navbar  variant="dark" expand="xl" className='Navbar'>
 
    <Navbar.Brand  href="/home"><img className="logohomepage" src={logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto">
        
        <Nav.Link className="Hometxt" style={{marginLeft: '15%',color:'white' }}href="/home"><HomeIcon className="homeicon"></HomeIcon>Home</Nav.Link>
        
        <Nav.Link className="predicttxt"  style={{marginLeft: '15%',color:'white' }} href="/predictionPage"><OnlinePredictionIcon className="onlinepredictionicon" ></OnlinePredictionIcon>Predict</Nav.Link>
        <Nav.Link className="Contacttxt" style={{marginLeft: '15%',color:'white' }} href="/contact"><ConnectWithoutContactIcon className="connect" ></ConnectWithoutContactIcon>Contact</Nav.Link>
      {role!='user' &&
        <Nav.Link className="Contacttxt" style={{marginLeft: '15%',color:'white' }} href="/adminpanel"><AdminPanelSettingsIcon className="connect" />Admin</Nav.Link>
      }
        <Nav.Link 
        className="Contacttxt" 
        style={{marginLeft: '15%',color:'white'}}
   onClick={(e) => {
            userService.logout();
            window.location.href = "/login";
          }}
         ><LogoutIcon className="connect" ></LogoutIcon > Logout
           </Nav.Link>
      </Nav>
      <Nav.Link className='welcometxt' ><p className="welcomep">Welcome {user.firstname}</p> </Nav.Link>
    <Nav.Link  style={{marginLeft: '-2%'}} href="/profile"><img className="profileimg" src={user.photo?user.photo:nophoto}/></Nav.Link>
 
    </Navbar.Collapse>
  
</Navbar>
       
    
     
    </div>
    );
}