import './PendingInformation.css';
import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import { DropdownButton,Dropdown } from 'react-bootstrap';
import { toast, ToastContainer } from "react-toastify";
import {Link} from 'react-router-dom'
import axios from 'axios';
import  useState  from 'react-usestateref'
// import  useState from 'react-usestateref';
const PendingInformation = (props) => {
   const makeStyle=(result)=>{
      if(information.result === 'Approved')
      {
        return {
          background: 'rgb(145 254 159 / 47%)',
          color: 'green',
        }
      }
      else if(information.result === 'Rejected')
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
    const {information,history,changestatus}=props
    const [Status,setStatus]=useState("Pending") ;
 
 const id = information._id;

 
   const updateinformation =async(e)=>{
    setStatus(e)
   await axios.put(`https://loanpredictionfypapi.herokuapp.com/api/informations/updatestatus/`+id,{id:id,status:e})
      .then((response) => {
         console.log(response)  
         toast.success("Loan Successfully "+e, {
          position: "top-right",
          theme: "colored"
        });
        setTimeout(function(){
          changestatus();
       }, 2000);
         
      })
      .catch((error) => console.log(error));
    
 }

    return(
       
       <>

       
        
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
              onSelect={(e)=>updateinformation(e)}
              >
              <Dropdown.Item eventKey="Approved"  >Approved</Dropdown.Item>
              <Dropdown.Item eventKey="Rejected" >Rejected</Dropdown.Item>
              </DropdownButton>
              </td>
              
      
    </tr>
  <ToastContainer/>
    </>
       
    );
    
}
export default withRouter(PendingInformation);