import './SingleInformation.css';
import { withRouter } from "react-router-dom";
import {Button, Table} from "react-bootstrap"
import userService from '../../services/UserService';
import InformationService from "../../services/InformationService";
const SingleInformation = (props) => {

    const {information,history,onDelete}=props
    return(
       <>
       {information.result&&
    <tr>
      <td style={{textAlign:'center'}} >{information.age}</td>
      <td  style={{textAlign:'center'}}>{information.income}</td>
      <td  style={{textAlign:'center'}}>{information.carownership}</td>
      <td style={{textAlign:'center'}}> {information.married}</td>
      <td style={{textAlign:'center'}}>{information.currenthouseyears}</td>
      <td style={{textAlign:'center'}} >{information.profession}</td>
      <td style={{textAlign:'center'}} >{information.currentjobyears}</td>
      <td style={{textAlign:'center'}} >{information.experience}</td>
      <td style={{textAlign:'center'}} >{information.Houseownership}</td>
      <td style={{textAlign:'center'}} >{information.result}</td>
      <td style={{textAlign:'center'}} >{information.status}</td>
      <td style={{textAlign:'center'}}><Button variant="danger" style={{marginTop:"-8%"}}
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
    }
    </>
       
    );
    
}
export default withRouter(SingleInformation);