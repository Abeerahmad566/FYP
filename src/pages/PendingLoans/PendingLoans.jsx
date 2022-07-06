import React,{useEffect} from "react";
import {Table} from "react-bootstrap"
import "./PendingLoans.css";
import userService from "../../services/UserService";
import InformationService from "../../services/InformationService";
import PendingInformation from "../PendingInformation/PendingInformation"
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from 'framer-motion/dist/framer-motion'
import PersonIcon from '@mui/icons-material/Person';
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,


} from "@iconscout/react-unicons";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import Badge from '@mui/material/Badge';
import axios from 'axios';
import  useState  from 'react-usestateref'
import Admin from "../../components/Admin"
export default function PendingLoans() {

  const [total, setTotal] = useState("");
      const [selectedHome, setSelectedHome] = useState(false);
      const [informations, setInformations] = useState([""]);
      const [userid,setuserid]=useState(userService.getLoggedInUser()._id);
      const [selectedRegister, setselectedRegister] = useState(false);
      const [selectedPending, setselectedPending] = useState(false);
      const [selectedApproved, setselectedApproved] = useState(false);
      const [selectedRejected, setselectedRejected] = useState(false);
      const [selectedUsers, setselectedUser] = useState(false);
      const [selectedAdmins, setselectedAdmin] = useState(false);
      const [selectedprediction, setselectedprediction] = useState(false);
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
      const makeStyle=(result)=>{
        if(result === 'Approved')
        {
          return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
          }
        }
        else if(result === 'Rejected')
        {
          return{
            background: '#ffadad8f',
            color: 'red',
          }
        }
        else{
          return{
            background: '#59bfff',
            color: 'white',
          }
        }
      }
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
        InformationService
                    .getpendingInformation()
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
            <div className="col-sm ">
            <>
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
        <div className="menuItem"
        style={{position:'relative',top:"50px"}}
        >
          <UilSignOutAlt  onClick={() => {  window.location.href = "/adminpanel" } }></UilSignOutAlt>
        </div>
      </div>
    </motion.div>
    </>
            </div>
            <div className="col-sm">
   {informations.length==0 &&
   <p className='npendingbold'>No Pending Loans</p>}
{informations.length>0&&
  <><p className='pendingbold'>Pending Loans</p><div className="pendingloantable">
                    <Table striped bordered hover responsize >
                      <thead>
                        <tr>
                          <th style={{ textAlign: 'center' }}><b>Prediction By</b></th>
                          <th style={{ textAlign: 'center' }}><b>Applicant CNIC</b></th>
                          <th style={{ textAlign: 'center' }}><b>Documents</b></th>
                          <th style={{ textAlign: 'center' }}><b>Age</b></th>
                          <th style={{ textAlign: 'center' }}><b>Income</b></th>
                          <th style={{ textAlign: 'center' }}><b>Car Ownership</b></th>
                          <th style={{ textAlign: 'center' }}><b>RelationShip Status</b></th>
                          <th style={{ textAlign: 'center' }}><b>Current House Years</b></th>
                          <th style={{ textAlign: 'center' }}><b>Profession</b></th>
                          <th style={{ textAlign: 'center' }}><b>Current Job Years</b></th>
                          <th style={{ textAlign: 'center' }}><b>Experience</b></th>
                          <th style={{ textAlign: 'center' }}><b>House Ownership</b></th>
                          <th style={{ textAlign: 'center' }}><b>Loan Tenure</b></th>
                          <th style={{ textAlign: 'center' }}><b>Prediction Result</b></th>
                          <th style={{ textAlign: 'center' }}><b>Status</b></th>
                          <th style={{ textAlign: 'center' }}><b>Reason</b></th>
                          <th style={{ textAlign: 'center' }}><b>Action</b></th>
                        </tr>
                      </thead>
                      <tbody>
                        {informations && informations.map((information) => (

                          <PendingInformation information={information} changestatus={getdata} />
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