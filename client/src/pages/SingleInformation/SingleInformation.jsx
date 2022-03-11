import './SingleInformation.css';
import { withRouter } from "react-router";
import {Table} from "react-bootstrap"
const SingleInformation = (props) => {
    const {information,history}=props
    return(
        <div >
            
            <Table striped bordered hover>
            
  <tbody>
    <tr>
      <td style={{width:"4.4%"}}>{information.age}</td>
      <td style={{width:"7%"}}>{information.income}</td>
      <td style={{width:"12%"}}>{information.carownership}</td>
      <td style={{width:"16%"}}>{information.currenthouseyears}</td>
      <td style={{width:"9.2%"}}>{information.profession}</td>
      <td style={{width:"14%"}}>{information.currentjobyears}</td>
      <td style={{width:"9.5%"}}>{information.experience}</td>
      <td style={{width:"14.1%"}}>{information.Houseownership}</td>
      <td >{information.Houseownership}</td>
      
    </tr>
  </tbody>
</Table>
        </div>
    );
    
}
export default withRouter(SingleInformation);