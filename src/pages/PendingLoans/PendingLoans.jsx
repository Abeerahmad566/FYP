import React,{useEffect} from "react";
import {Table} from "react-bootstrap"
import "./PendingLoans.css";
import userService from "../../services/UserService";
import InformationService from "../../services/InformationService";

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
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";
import {Link} from 'react-router-dom'
import axios from 'axios';
import  useState  from 'react-usestateref'
export default function PendingLoans() {

    
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
     const [Status,setStatus]=useState("Pending") ;
 
 const id = informations._id;
 console.log("database "+informations.status)
 console.log("frontend "+Status)
 

   const updateInformation =async()=>{
    const formData = new FormData();
   formData.append("status", Status);

   await axios.put(`http://localhost:4000/api/informations/updatestatus/`+id,{id,formData})
      .then((response) => {
         console.log(response.status)  
         getdata();
      })
      .catch((error) => console.log(error));
 }
 {Status == 'Approved' || Status == 'Rejected' &&
updateInformation()
 }
    return (
      <div className="App">
                <div className="AppGlass">
        <div className="body">
        <div className="row bodydiv" >
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
        <div className="menuItem"
        style={{position:'relative',top:"50px"}}
        >
          <UilSignOutAlt  onClick={() => {  window.location.href = "/home" } }></UilSignOutAlt>
        </div>
      </div>
    </motion.div>
    </>
            </div>
            <div className="col-sm">
        <div className="Table pendingloantable">
              
               
   {informations.length==0 &&
   <p style={{paddingTop:'80px',marginLeft:'-80%'}}><b className='bold'>No Pending Loans</b></p>}
   {informations.length >0 &&
  <><p style={{paddingTop:'30px',marginRight:'30%'}}><b className='pbold' >Pending Loans</b></p>
   <Table striped bordered hover  responsize className="pendingloantable">
               <thead>
                 <tr>
                 <th style={{textAlign:'center'}}><b>Prediction By</b></th>
                 <th style={{textAlign:'center'}} ><b>Applicant CNIC</b></th>
                 <th style={{textAlign:'center'}} ><b>Documents</b></th>
                   <th style={{textAlign:'center'}}><b>Age</b></th>
                   <th style={{textAlign:'center'}}><b>Income</b></th>
                   <th style={{textAlign:'center'}}><b>Car Ownership</b></th>
                   <th style={{textAlign:'center'}}><b>RelationShip Status</b></th>
                   <th style={{textAlign:'center'}}><b>Current House Years</b></th>
                   <th style={{textAlign:'center'}}><b>Profession</b></th>
                   <th style={{textAlign:'center'}}><b>Current Job Years</b></th>
                   <th style={{textAlign:'center'}}><b>Experience</b></th>
                   <th style={{textAlign:'center'}}><b>House Ownership</b></th>
                   <th style={{textAlign:'center'}}><b>Prediction Result</b></th>
                   <th style={{textAlign:'center'}}><b>Status</b></th>
                  
                 </tr>
               </thead>
               <tbody>
                 {informations && informations.map((information) => (
                    <>

                    {information.result &&
                     
                 <tr>
                    <td style={{textAlign:'center'}} >{information.firstname} {information.lastname}</td>
                    <td style={{textAlign:'center'}} >{information.cnic} </td>
                    <td style={{textAlign:'center'}} ><Link to={`/applicantdocuments/?backUrl=${information._id}`}
                     className='applicantdocuments'>View</Link></td> 
                   <td style={{textAlign:'center'}} >{information.age}</td>
                   <td  style={{textAlign:'center'}}>{information.income}</td>
                   <td  style={{textAlign:'center'}}>{information.carownership}</td>
                   <td style={{textAlign:'center'}}> {information.married}</td>
                   <td style={{textAlign:'center'}}>{information.currenthouseyears}</td>
                   <td style={{textAlign:'center'}} >{information.profession}</td>
                   <td style={{textAlign:'center'}} >{information.currentjobyears}</td>
                   <td style={{textAlign:'center'}} >{information.experience}</td>
                   <td style={{textAlign:'center'}} >{information.Houseownership}</td>
                   <td style={makeStyle(information.result)} >{information.result}</td>
                  
                   <td><DropdownButton   id="dropdown-basic-button" title={Status} size="sm"
                           drop={"down"}
                           className="pendinginformationdropdown"
                           >
                           <Dropdown.Item value="Approved" onClick={() =>{
                             setStatus("Approved")
             
                         }
                              } >Approved</Dropdown.Item>
                           <Dropdown.Item value="Rejected" onClick={(e) =>{
                         
                         }
                              }>Rejected</Dropdown.Item>
                           </DropdownButton>
                           </td>
                           
                   
                 </tr>
                 }
                 </>
                 ))}
                   
               </tbody>
             </Table></>
}
            </div></div></div></div>
            </div></div>
    )
}