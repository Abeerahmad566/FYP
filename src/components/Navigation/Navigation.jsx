import "./navigation.css"

import logo from '../../pages/img/logo.png';

import {Navbar,Nav} from "react-bootstrap"

import HomeIcon from '@mui/icons-material/Home';

import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import FeaturedPlayListOutlinedIcon from '@mui/icons-material/FeaturedPlayListOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
export default function Navigation() {
  return (
    <>
    <Navbar className="Navbar"  expand="xl"  >
 
 <Navbar.Brand  href="#landingpage"><img className="logohomepage" src={logo}></img></Navbar.Brand>
 <Navbar.Toggle aria-controls="basic-navbar-nav" />
 <Navbar.Collapse id="basic-navbar-nav">
   <Nav className="me-auto">
     
     
   </Nav>
   
   <Nav.Link className="txtf" style={{marginLeft: '10%',color:'white' }}href="#features"><FeaturedPlayListOutlinedIcon sx={{ "&:hover": { color: "white" } }} className="icon"></FeaturedPlayListOutlinedIcon>Features</Nav.Link>
   <Nav.Link className="txt" style={{color:'white' }} href="#team"><GroupOutlinedIcon sx={{ "&:hover": { color: "white" } }} className="icon" ></GroupOutlinedIcon>Team</Nav.Link>
   <Nav.Link className="txt" style={{color:'white' }}href="#aboutus"><InfoOutlinedIcon sx={{ "&:hover": { color: "white" } }} className="icon"></InfoOutlinedIcon>About us</Nav.Link>
   <Nav.Link className="txt" style={{color:'white' }} href="#contact"><ConnectWithoutContactIcon sx={{ "&:hover": { color: "white" } }} className="icon" ></ConnectWithoutContactIcon>Contact</Nav.Link>
   <Nav.Link className="txt" style={{color:'white' }} href="/login"><LoginOutlinedIcon sx={{ "&:hover": { color: "white" } }} className="icon" ></LoginOutlinedIcon>Login</Nav.Link>
   <Nav.Link className="txt" style={{marginRight:'10%',color:'white' }} href="/register"><HowToRegOutlinedIcon sx={{ "&:hover": { color: "white" } }} className="icon" ></HowToRegOutlinedIcon>Register</Nav.Link>
  
 </Navbar.Collapse>

</Navbar>
    
 
    </>
  )
}
