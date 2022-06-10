import React from 'react';
import {useLocation,useParams} from 'react-router-dom';
import informationService from '../../services/InformationService';
import useState from 'react-usestateref';
import {Table} from 'react-bootstrap'
import "./ApplicantDocuments.css"
import { UilSignOutAlt } from "@iconscout/react-unicons";
export default function ApplicantDocuments(props) {
   const [userpictures,setuserpictures]=useState([])
   const search = useLocation().search;
   const id = new URLSearchParams(search).get("backUrl");
   console.log(id);

   const getdata=()=>{
       informationService.getuserspictures(id)
       .then((data)=>{
           console.log(data.photo)
        setuserpictures(data.photo)               
    })
    .catch((err) => {
      console.log(err);
     
    });
   }
   React.useEffect(getdata, []);
   
    return(
        <div className="App">
        <div className="AppGlass">
            <div className="appldoctable">
        <Table striped bordered hover>
            <thead>
              <tr>

                <th style={{textAlign:"center"}}><b>Documents</b></th> </tr>
               </thead>
               <tbody>
        {userpictures && userpictures.map((userpicture) => (
              <tr> <td onClick={()=> window.open(userpicture)}><img className='userdocimg' src={userpicture}></img></td></tr>
             
                 ))}
         </tbody>
                    </Table>
                    </div>
                    <UilSignOutAlt className="outsignuserdoc" onClick={() => {  window.location.href = "/allloans" } }></UilSignOutAlt>
            </div>
            </div>
    )
}