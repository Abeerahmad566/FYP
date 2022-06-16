import {useParams} from "react-router-dom";
import userService from "../services/UserService";
import { useEffect } from "react";
import swal from 'sweetalert'
const Emailverify= ()=> 
{
//   const {id} =useParams();
//   console.log(id);
// const {verifyToken} = useParams();
// console.log(verifyToken);


// const confirmation= ()=>{
//     userService.confirmation(verifyToken).then((res) => {
       
//         swal({ 
//           title: "Congratulations!",
//         text: "Email Verified Successfully",
//         icon: 'success',
//         button: 'ok ',
//       }).then(okay => {
//           if (okay) {
//            window.location.href = "/login";
//          }
//        });
//       })
//       .catch((error) => {
//         if(error.response.status==400)
//         {
//             swal({
//                 title: 'Oops!',
//                 text: "Link Expired",
//                 icon: 'error',
//                 button: 'ok ',
//               });
//               userService.deleteUser(id).then((data) => {
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//         }
//         else{
//         swal({
//           title: 'Oops!',
//           text: {error},
//           icon: 'error',
//           button: 'ok ',
//         });
//         console.log(error);
//     }
//       });
// }
// useEffect(confirmation,[]);
return(
    <>
   
    </>
 )};
 export default Emailverify;