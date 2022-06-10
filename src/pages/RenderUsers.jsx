import userService from "../services/UserService";
import { Button } from "react-bootstrap";
export default function RenderUsers(props){
    const {information,history,onDelete}=props
    return (
        <>
    
    <tr>
      <td style={{textAlign:'center'}}>{information.firstname}</td>
      <td  style={{textAlign:'center'}}>{information.lastname}</td>
      <td  style={{textAlign:'center'}}>{information.phonenumber}</td>
      <td style={{textAlign:'center'}}> {information.email}</td>
      <td style={{textAlign:'center'}}>{information.role}</td>
      <td style={{textAlign:'center'}}><Button variant="danger" size='sm'
      onClick={(e)=>{
        userService.deleteUser(information._id).then((data) => {
          console.log(data);
          onDelete();
        })
        .catch((err) => {
          console.log(err);
        });
      }}>Delete</Button></td>
      
    </tr>
    
    </>
    )
}