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
      <td style={{width:"4%"}}>{information.age}</td>
      <td style={{width:"6.3%"}}>{information.income}</td>
      <td style={{width:"11%"}}>{information.carownership}</td>
      <td style={{width:"14.5%"}}>{information.currenthouseyears}</td>
      <td style={{width:"8.2%"}}>{information.profession}</td>
      <td style={{width:"12.8%"}}>{information.currentjobyears}</td>
      <td style={{width:"9.3%"}}>{information.legalstatus}</td>
      <td style={{width:"8.5%"}}>{information.experience}</td>
      <td style={{width:"13%"}}>{information.Houseownership}</td>
      <td >{information.Houseownership}</td>
      
    </tr>
  </tbody>
</Table>
        </div>
    );
    
}
export default withRouter(SingleInformation);