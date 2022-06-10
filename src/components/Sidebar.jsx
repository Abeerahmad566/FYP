import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from 'framer-motion/dist/framer-motion'
import userService from "../services/UserService";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import Admin from "../components/Admin";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,

} from "@iconscout/react-unicons";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
const Sidebar = () => {
  const [selectedHome, setSelectedHome] = useState(false);
  const [selectedRegister, setselectedRegister] = useState(false);
  const [selectedPending, setselectedPending] = useState(false);
  const [selectedApproved, setselectedApproved] = useState(false);
  const [selectedprediction, setselectedprediction] = useState(false);
  const [selectedUsers, setselectedUser] = useState(false);
  const [selectedAdmins, setselectedAdmin] = useState(false);
 
  const role = userService.getLoggedInUser().role;
  const [expanded, setExpaned] = useState(true)
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  const changestyleHome=()=>{
    setSelectedHome(true)
  }
  const changestyleregister=()=>{
    setselectedRegister(true)
  }
  const changestylepending=()=>{
    setselectedPending(true)
  }
  const changestyleapproved=()=>{
    setselectedApproved(true)
  }
  const changestyleprediction=()=>{
    setselectedprediction(true)
  }
  const changestyleuser=()=>{
    setselectedUser(true)
  }
  const changestyleadmin=()=>{
    setselectedAdmin(true)
  }
  return (
    <>
    <Admin>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
     

      <div className="menu">    
                 
      <a  className={selectedHome? "menuItem aactive" : "menuItem"}  href="/adminpanel" style={{textDecoration:'none',color:"black"}} onClick={changestyleHome}><UilEstate/>Home</a> 
   
    <a  className={selectedPending? "menuItem aactive" : "menuItem"}href="/pendingloans" style={{textDecoration:'none',color:"black"}} onClick={changestylepending}><UilUsersAlt/>Pending Loans</a>
  <a  className={selectedApproved? "menuItem aactive" : "menuItem"}href="/allloans" style={{textDecoration:'none',color:"black"}} onClick={changestyleapproved}><UilPackage/>All Loans</a>
  <a className={selectedprediction? "menuItem aactive" : "menuItem"} href="/predictionPage" style={{textDecoration:'none',color:"black"}} onClick={changestyleprediction}><OnlinePredictionIcon/>Predict Loan</a> 
  {role=='superAdmin'&&
  <>
  <a  className={selectedRegister? "menuItem aactive" : "menuItem"}href="/adminregister" style={{textDecoration:'none',color:"black"}} onClick={changestyleregister}><UilClipboardAlt/>Register a Admin</a>
        <a className={selectedUsers? "menuItem aactive" : "menuItem"} href="/manageusers" style={{textDecoration:'none',color:"black"}} onClick={changestyleuser}><PersonIcon/>Manage Users</a>   
        <a className={selectedAdmins? "menuItem aactive" : "menuItem"} href="/manageadmins" style={{textDecoration:'none',color:"black"}} onClick={changestyleadmin}><PersonIcon/>Manage Admins</a> 
        </>
  }
        {/* signoutIcon */}
        <div className="menuItem">
          <UilSignOutAlt  onClick={() => {  window.location.href = "/home" } }></UilSignOutAlt>
        </div>
      </div>
    </motion.div>
    </Admin>
    </>

  );
};

export default Sidebar;
