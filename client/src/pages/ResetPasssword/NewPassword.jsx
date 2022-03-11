import "./NewPassword.css";
import React from 'react';
import ResetPasswordPic from "../img/rsetpss.jpg";
import { TextField, Button } from "@material-ui/core";
 const NewPassword = () =>
 {
    const [password, setPassword] = React.useState("");
    const [Confirmpassword, setConfirmPassword] =React. useState("");
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
                if(confmpass!="")
                {
                    setError("")
                }
                else if(password != confmpass){
                  setError("Both Passwords should Match")
                }
                else{
                  setError("");
                }
            
              }
    const checkvalidation=()=>{
        if(password=="")
        {
            setError("Please Enter Password")
        }
        else if (Confirmpassword=="")
        {
            setError("Please Enter Confirm Password")
        }
        else
        {
            alert("Password Changed")
        }
    }
  return(
  <div>
      <img className="rsetpass" src={ResetPasswordPic} alt="" />
      <br/>
      <div className="container">
      <b><span style={{fontSize:"2vw"}}>Reset Password</span></b><br/>
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
        <button
         className="newpassButton"
          onClick={
            checkvalidation
          }
        >
          Submit
        </button>
        </div>
  </div>)   
 }
 export default NewPassword;