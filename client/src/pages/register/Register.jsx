
import React from "react";
import Signup from '../img/signup.jpg'
import { TextField, Button } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './register.css'

const Register = () => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [Firstname, setFirstName] = React.useState("");
    const [lastname, setlastName] = React.useState("");
    const [phonenumber,setphonenumber] = React.useState("");
    const [Confirmpassword, setConfirmPassword] =React. useState("");
    
    const emlverfication=(e)=>{
      const eml = e.target.value;
      setEmail(eml);
      const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if(!regex.test(email))
      {
        setError("Enter Valid Email")
      }
     else if(email!="")
     {
       setError("")
     }
    }
    const fnverfication=(e)=>{
      const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/
      if(!rx_live.test(e.target.value))
      {
        setFirstName(e.target.value)
      }
else if(Firstname!="")
    {
      setError("")
    }
    }
    const lnverfication=(e)=>{
      const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/
     if(!rx_live.test(e.target.value))
     {
       setlastName(e.target.value)
     }
     else if(lastname!="")
     {
       setError("")
     }
    }
    const pnverfication=(e)=>{
      
      const re = /^[0-9\b]+$/;
      if (re.test(e.target.value))
      {    
      setphonenumber(e.target.value);    
    }
  }
    const pssverfication=(e)=>{
const pss = e.target.value;
setPassword(pss);
if(password!="")
{
  setError("")
}
    }
    const checkvalidation = ()=>{
      if(Firstname=="")
      {
setError("Please Enter First Name")
      }
      else if(lastname=="")
      {
setError("Please Enter Last Name")
      }
      else if(email=="")
      {
setError("Please Enter Email")
      }
      else if(!email.includes("@"))
      {
        setError("Enter Valid Email")
      }
     else if(phonenumber=="")
      {
setError("Please Enter Phone Number")
      }
      else if(phonenumber.length>12||phonenumber.length<11)
      {
        {
          setError("Enter 11 digits Number")
        }
      }
      else if(phonenumber.length==11)
      {
        setError("")
      }
      else if(password=="")
      {
setError("Please Enter Password")
      }
      else if (Confirmpassword=="")
      {
        setError("Please Enter Confirm Password")
      }
      else{
        userService
              .register(Firstname,lastname, email,phonenumber, password)
              .then((data) => {
                console.log(data);
                window.location.href = "/login";
              })
              .catch((err) => {
                console.log(err);
                toast.error(err.response.data, {
                  position: toast.POSITION.TOP_LEFT,
                });
              });
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
  return (
    <div >
      <img className="rgstrpic" src={Signup} alt="" />
      <div className="fullrgstr">
      <span className="rgstrtxt">Register</span>
        <br />
        <label style={{ marginTop: '20px' }}>Enter Your First Name</label>
        <br />
        <TextField
         placeholder="Enter First Name"
          value={Firstname}
          onChange={(e) => {
            fnverfication(e);
          }}
        />{" "}
        <br />
        <label style={{ marginTop: '20px' }}>Enter Your Last Name</label>
        <br />
        <TextField
         placeholder="Enter Last Name"
          value={lastname}
          onChange={(e) => {
            lnverfication(e);
          }}
        />{" "}
        <br />
        <label style={{ marginTop: '20px' }}>Enter Your Email</label>
        <br />
        <TextField
         placeholder="Enter Email"
          value={email}
          onChange={(e) => {
           emlverfication(e);
          }}
        />{" "}
        <br />
        <label style={{ marginTop: '20px' }}>Enter Your Phone Number</label>
        <br />
        <TextField
         placeholder="Enter Phone Number"
          value={phonenumber}
          onChange={(e) => {
            pnverfication(e);
          }}
        />{" "}
        <br />
        <label style={{ marginTop: '20px' }}>Enter Your Password</label>
        <br />
        <TextField
          type="password"
          placeholder="Enter  Password"
          value={password}
          onChange={(e) => {
            pssverfication(e);
          }}
        />{" "}
        <br />
        <label style={{ marginTop: '20px' }} >Enter Confrim Password</label>
        <br/>
      <TextField
          value={Confirmpassword}
          type="password"
          className="registerInput"
         placeholder="Enter confirm Password"
          onChange={(e)=>checkcnfpasswordvaldiation (e)}
        />
        <br/>
        <div style={{color:"red"}}>{error}</div>
        <Link className="registerlink" to="/login">
        <b >Already a user? Login Here!</b>
        </Link>
        <br />
        <button
         className="registerButton"
          onClick={
            checkvalidation
          }
        >
          SignUp
        </button>
      </div>
    </div>
  );
};

export default Register;