import "./NewPassword.css";
import React from 'react';
import ResetPasswordPic from "../img/rsetpss.jpg";
import { TextField, Button } from "@material-ui/core";
import {toast} from "react-toastify"
import axios from "axios" 
 const NewPassword = (props) =>
 {
    const [password, setPassword] = React.useState("");
    const [Confirmpassword, setConfirmPassword] =React. useState("");
    const [otp, setotp] =React. useState("");
    const [error, setError] = React.useState("");

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
              const otpverfication=(e)=>{
      
                const re = /^[0-9\b]+$/;
                if (re.test(e.target.value))
                {    
                setotp(e.target.value);    
              }
              else if(otp!="")
               {
                 setError("")
               }
            }
    const checkvalidation=async()=>{
      if(otp=="")
      {
        setError("Please Enter Otp")
      }
        else if(password=="")
        {
            setError("Please Enter Password")
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
          try{
            let url = "http://localhost:4000/api/users/reset-password"
            let options ={
              method:"POST",
              url:url,
               
            }
            let response = await axios(options)
            let record = response.data;
            if(record.statusText=='Success')
            {
              setError(record.message)
              // toast.sucess(record.message);
              window.location.href = "/resetpass";
            }
            else{
              setError(record.message)
              toast.error(record.message)
            }
          }
          catch(e)
          {
            
            toast.error("Something went wrong")
          }
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
      <b><span style={{fontSize:"2rem"}}>Reset Password</span></b><br/>
      <label style={{ marginTop: '20px' }}>Enter Your Otp</label><br/>
      <TextField
      style={{marginTop:"1%"}}
          
          placeholder="Enter Otp"
          value={otp}
          onChange={(e) => {
            otpverfication(e);
          }}
        />{" "}
        <br/>
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