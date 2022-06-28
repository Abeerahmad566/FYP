import './AllInformation.css';

import Button from 'react-bootstrap/Button'
import InformationService from '../../services/InformationService';
import userService from "../../services/UserService";
import {Link,withRouter} from "react-router-dom"
import { useState } from 'react';
const AllInformation = (props) => {

    const {information,history,onDelete}=props
    const role = userService.getLoggedInUser().role;
  const id = information.userid;
  const[showpictures,setshowpictures]= useState(false);
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
    return(
       <>
       {information.result &&  
    <tr>
      <td style={{textAlign:'center'}} >{information.firstname} {information.lastname}</td>
      <td style={{textAlign:'center'}} >{information.userRole}</td>
      <td style={{textAlign:'center'}} >{information.cnic}</td>
      <td style={{textAlign:'center'}} ><Link to={`/applicantdocuments/`+information._id}
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
      <td style={makeStyle(information.status)} >{information.status}</td>
      <td style={{textAlign:'center'}} >{information.reason}</td>
      {role=="superAdmin"&&
      <td style={{textAlign:'center'}}><Button variant="danger" size='sm'
      onClick={(e)=>{
        InformationService.deleteInformation(information._id).then((data) => {
          console.log(data);
          onDelete();
        })
        .catch((err) => {
          console.log(err);
        });
      }}>Delete</Button></td>
}
    </tr>
 
    }
    </>
       
    );
    
}
export default withRouter(AllInformation);