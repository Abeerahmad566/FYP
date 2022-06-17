import {useParams} from "react-router-dom";
import userService from "../services/UserService";
import { useEffect } from "react";
import swal from 'sweetalert'
const Emailverifylogin= ()=> 
{
  const {id} =useParams();
  console.log({id});
const {token} = useParams();
console.log({token});


const confirmation= ()=>{
    userService.confirmation(id,token).then((res) => {
        
        swal({ 
          title: "Congratulations!",
        text: "Email Verified Successfully",
        icon: 'success',
        button: 'ok ',
      })   .then(function() {
            window.location = "/login";
         });
    
      })
   
      .catch((error) => {
        if(error.response.status==402)
        {
            swal({
                title: 'Verify!',
                text: "An Email sent to your account please verify",
                icon: 'success',
                button: 'ok ',
              });
            }
            else if(error.response.status==401)
            {
                swal({
                    title: 'Oops!',
                    text: "Email already Verified",
                    icon: 'error',
                    button: 'ok ',
                  });
                }
            
      });
}
useEffect(confirmation,[]);
return(
    <>
   
    </>
 )};
 export default Emailverifylogin;