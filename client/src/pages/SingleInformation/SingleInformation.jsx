import './SingleInformation.css';
import { withRouter } from "react-router";
import {Table} from "react-bootstrap"
const SingleInformation = (props) => {
    const {information,history}=props
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
      
    </tr>
  
       
    );
    
}
export default withRouter(SingleInformation);