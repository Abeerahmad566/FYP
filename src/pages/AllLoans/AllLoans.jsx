import React, { useState } from "react";
import {Table} from "react-bootstrap"
import "./AllLoans.css";
import userService from "../../services/UserService";
import InformationService from "../../services/InformationService";
import AllInformation from "../AllInformation/AllInformation"
import { UilSignOutAlt } from "@iconscout/react-unicons";
import Admin from "../../components/Admin"
export default function AllLoans() {
 

    const makeStyle=(status)=>{
        if(status === 'Approved')
        {
          return {
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
          }
        }
        else if(status === 'Rejected')
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
  
      const [informations, setInformations] = useState([""]);
      const [userid,setuserid]=useState(userService.getLoggedInUser()._id);
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
      
      const getdata=()=>{
        InformationService
                    .getallInformation()
                    .then((data) => {
                    setInformations(data)               
                    })
                    .catch((err) => {
                      console.log(err);
                     
                    });
     }
        
     React.useEffect(getdata, []);
    return (
      <>
      <Admin>
      <div className="App">
      <div className="AppGlass">
   {informations.length==0 &&
   <p style={{paddingTop:'30px',marginRight:"30%"}}><b className='nbold'>No Loans</b></p>}
{informations.length>0 && 
  <><p className='existingloansbold'>Existing Loans</p>
  <UilSignOutAlt className="alloutsign" onClick={() => { window.location.href = "/adminpanel"; } }></UilSignOutAlt>
  <div className="allloantable">
                  <Table striped bordered hover responsize>
                    <thead>
                      <tr>
                        <th style={{ textAlign: 'center' }}><b>Prediction By</b></th>
                        <th style={{ textAlign: 'center' }}><b>Role</b></th>
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
                        <th style={{ textAlign: 'center' }}><b>Prediction Result</b></th>
                        <th style={{ textAlign: 'center' }}><b>Status</b></th>
                        {role == "superAdmin" &&
                          <th style={{ textAlign: 'center' }}><b>Action</b></th>}
                      </tr>
                    </thead>
                    <tbody>
                      {informations && informations.map((information) => (
                        <AllInformation information={information} onDelete={getdata} />
                      ))}

                    </tbody>
                  </Table>
                  
                </div>
             
               </>
               }
               </div></div>
            </Admin>
            </>
    )
    
}