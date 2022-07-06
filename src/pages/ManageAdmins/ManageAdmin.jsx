
import React, { useState } from "react";
import {Table} from "react-bootstrap"
import "./ManageAdmin.css";
import userService from "../../services/UserService";
import RenderAdmins from "../RenderUsers"
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from 'framer-motion/dist/framer-motion'
import PersonIcon from '@mui/icons-material/Person';
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,


} from "@iconscout/react-unicons";
import Admin from "../../components/Admin"
import axios from "axios"
import Badge from '@mui/material/Badge';
export default function ManageAdmin() {

  const [selectedprediction, setselectedprediction] = useState(false);
      const [selectedHome, setSelectedHome] = useState(false);
      const [informations, setInformations] = useState([""]);
      const [userid,setuserid]=useState(userService.getLoggedInUser()._id);
      const [selectedRegister, setselectedRegister] = useState(false);
      const [selectedPending, setselectedPending] = useState(false);
      const [selectedApproved, setselectedApproved] = useState(false);
      const [selectedRejected, setselectedRejected] = useState(false);
      const [selectedUsers, setselectedUser] = useState(false);
      const [selectedAdmins, setselectedAdmin] = useState(false);
      const [total, setTotal] = useState("");
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
      const changestylerejected=()=>{
        setselectedRejected(true)
      }
      const changestyleuser=()=>{
        setselectedUser(true)
      }
      const changestyleadmin=()=>{
        setselectedAdmin(true)
      }
      const changestyleprediction=()=>{
        setselectedprediction(true)
      }
      const getdata=()=>{
        userService
                    .getAdmins()
                    .then((data) => {
                    setInformations(data)               
                    })
                    .catch((err) => {
                      console.log(err);
                     
                    });
     }
        
     React.useEffect(getdata, []);
     const totalpending=async()=>{
      await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/get/totalpendingloans").then((res) => {
        setTotal(res.data);
      });
    }
    React.useEffect(totalpending, []);
    return (
      <>
      <Admin>
      <div className="App">
      <div className="AppGlass">
        <div className="body">
        <div className="row" >
            <div className="col-sm">
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
      <Badge  badgeContent={total} sx={{
          "& .MuiBadge-badge": {
            color: "black",
            backgroundColor: "red",
          }
         
        }}
        >
    <a  className={selectedPending? "menuItem aactive" : "menuItem"}href="/pendingloans" style={{textDecoration:'none',color:"black"}} onClick={changestylepending}><UilUsersAlt/>Pending Loans</a>
  </Badge>
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
         <>
        <div className="menuItem"
        style={{position:'relative',top:"50px"}}
        >
          <UilSignOutAlt  onClick={() => {  window.location.href = "/home" } }></UilSignOutAlt>
        </div>
        </>
      </div>
      
    </motion.div>
    
            </div>
            <div className="col-sm">               
   {informations.length==0 &&
   <p  className='nexistingadminbold'>No Existing Admins</p>}
   {informations.length>0 &&
  <><p className='existingadminbold'>Existing Admins</p><div className="Table manageadminstable">
                        <Table striped bordered hover responsize>
                          <thead>
                            <tr>
                              <th style={{ textAlign: 'center' }}><b>First Name</b></th>
                              <th style={{ textAlign: 'center' }}><b>Last Name</b></th>
                              <th style={{ textAlign: 'center' }}><b>Phone Number</b></th>
                              <th style={{ textAlign: 'center' }}><b>Email</b></th>
                              <th style={{ textAlign: 'center' }}><b>Role</b></th>
                              <th style={{ textAlign: 'center' }}><b>Action</b></th>
                            </tr>
                          </thead>
                          <tbody>
                            {informations && informations.map((information) => (
                              <RenderAdmins information={information} onDelete={getdata} />
                            ))}

                          </tbody>
                        </Table>

                      </div></>
}
            </div>
            </div>
            </div>
            </div>
            </div>
            </Admin>
      </>
    )
}