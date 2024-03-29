import {useParams} from "react-router-dom";
import userService from "../services/UserService";
import { useEffect } from "react";
import swal from 'sweetalert'
const Emailverify= ()=> 
{
  const {id} =useParams();
  console.log({id});
const {token} = useParams();
console.log({token});


const confirmation= ()=>{
    userService.confirmation(id,token).then((res) => {
        if(res.response.status===200){
        swal({ 
          title: "Congratulations!",
        text: "Email Verified Successfully",
        icon: 'success',
        button: 'ok ',
      })
    }
      })
   
      .catch((error) => {
        if(error.response.status==400)
        {
            swal({
                title: 'Oops!',
                text: "Link Expired",
                icon: 'error',
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
 export default Emailverify;