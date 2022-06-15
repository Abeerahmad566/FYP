import "./NewPassword.css";
import React from 'react';
import ResetPasswordPic from "../img/rsetpss.jpg";
import { TextField, Button } from "@material-ui/core";
import {toast} from "react-toastify"
import axios from "axios" 
import swal from 'sweetalert';
import {useParams} from "react-router-dom";
import userService from "../../services/UserService";
 const NewPassword = (props) =>
 {
  
    const [password, setPassword] = React.useState("");
    const [Confirmpassword, setConfirmPassword] =React. useState("");
    const [error, setError] = React.useState("");

    const {resetToken} = useParams();
    console.log(resetToken)

    const pssverfication=(e)=>{
        const pss = e.target.value;
        setPassword(pss);
        if(password!="")
        {
          setError("")
        }
            }
    const checkcnfpasswordvaldiation= (e)=>  {
                const confmpass=e.target.value
                setConfirmPassword(confmpass);
                if(password != confmpass){
                  setError("Both Passwords should Match")
                }
                else{
                  setError("");
                }
            
              }
              
    const checkvalidation=async()=>{
       if(password=="")
        {
            setError("Please Enter Password")
        }
        else if (password.length<8)
{
  setError("Please Enter 8 or more Characters Password")
}
        else if (Confirmpassword=="")
        {
            setError("Please Enter Confirm Password")
        }
        else if(password!=Confirmpassword)
        {
          setError("Password do not Match")
        }
        else
        {
         
            userService.newpassword
              (resetToken, { password })
              .then((res) => {
                setPassword("")
                setConfirmPassword("")
                swal({ 
                  title: "Congratulations!",
                text: "Password Reset Successfully",
                icon: 'success',
                button: 'ok ',
              }).then(okay => {
                  if (okay) {
                   window.location.href = "/login";
                 }
               });
              })
              .catch((error) => {
                swal({
                  title: 'Oops!',
                  text: {error},
                  icon: 'error',
                  button: 'ok ',
                });
                console.log(error);
              });
        }
    }
  return(
  <div>
    <div className="container">
      <div className="row">
        <div className="col-sm mt-5">
      <img className="rsetpass" src={ResetPasswordPic} alt="" />
      
      </div>
      <div className="col-sm ml-5 mt-5">
      <b><span style={{fontSize:"2rem",color:"#1e90ff"}}>Reset Password</span></b><br/>
      
      <label style={{ marginTop: '20px' }}>Enter Your New Password</label><br/>
      <TextField
      style={{marginTop:"1%"}}
          type="password"
          placeholder="Enter New Password"
          value={password}
          onChange={(e) => {
            pssverfication(e);
          }}
        />{" "}
        <br />
        <label style={{ marginTop: '20px' }}>Enter  New Confirm Password</label><br/>
        <TextField
         style={{marginTop:"1%"}}
          value={Confirmpassword}
          type="password"
         placeholder="Enter New Confirm Password"
          onChange={(e)=>checkcnfpasswordvaldiation (e)}
        />
        <br/>
        <b style={{color:"red"}}>{error}</b>
        <br/>
        <button
         className="newpassButton"
          onClick={
            checkvalidation
          }
        >
          Submit
        </button>
        </div>
  </div>
  </div>
    </div>)   
 }
 export default NewPassword;