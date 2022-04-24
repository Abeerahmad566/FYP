import "./Topbar.css";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
import homepage from "../img/homepage.jpg"
import userService from "../../services/UserService";
import {Navbar,Container,Nav} from "react-bootstrap"
import { Button } from "@material-ui/core";
export default function Topbar() {
    return(
<div >
  
<Navbar bg="primary" variant="dark" expand="xl" >
 
    <Navbar.Brand  href="/home"><img className="logo" src={logo}></img></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link style={{marginLeft: '20%' }}href="/home">Home</Nav.Link>
        <Nav.Link  style={{marginLeft: '20%' }} href="/predictionPage">Predict</Nav.Link>
        <Nav.Link style={{marginLeft: '20%' }} href="/contact">Contact</Nav.Link>
        <Nav.Link style={{marginLeft: '20%' }} onClick={(e) => {
            userService.logout();
            window.location.href = "/login";
          }}> Logout 
           </Nav.Link>

      </Nav>
    <Nav.Link style={{marginLeft: '20%'}} href="/profile"><img style={{borderRadius:"200/2px" ,height:"50px",width:"50px"}} src={homepage}/></Nav.Link>
    </Navbar.Collapse>
  
</Navbar>
       
    
     
    </div>
    );
}