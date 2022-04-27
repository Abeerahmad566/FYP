import './SingleInformation.css';
import { withRouter } from "react-router";
import {Button, Table} from "react-bootstrap"
import userService from '../../services/UserService';
import InformationService from "../../services/InformationService";
const SingleInformation = (props) => {

    const {information,history,onDelete}=props
    return(
        
            
          
    <tr>
      <td >{information.age}</td>
      <td >{information.income}</td>
      <td >{information.carownership}</td>
      <td> {information.married}</td>
      <td>{information.currenthouseyears}</td>
      <td >{information.profession}</td>
      <td >{information.currentjobyears}</td>
      <td >{information.experience}</td>
      <td >{information.Houseownership}</td>
      <td >{information.result}</td>
      <td><Button variant="danger"
      onClick={(e)=>{
        InformationService.deleteInformation(information._id).then((data) => {
          console.log(data);
          onDelete();
        })
        .catch((err) => {
          console.log(err);
        });
      }}>Delete</Button></td>
      
    </tr>
  
       
    );
    
}
export default withRouter(SingleInformation);