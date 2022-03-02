
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
      if(email!=""){
        setError("")
      }
    }
    const fnverfication=(e)=>{
const fn =e.target.value;
setFirstName(fn);
if(Firstname!="")
    {
      setError("")
    }
    }
    const lnverfication=(e)=>{
      const ln =e.target.value;
      setlastName(ln);
      if(lastname!="")
          {
            setError("")
          }
    }
    const pnverfication=(e)=>{
      const pn =e.target.value;
      setphonenumber(pn);
      if(phonenumber!="")
          {
            setError("")
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
     else if(phonenumber=="")
      {
setError("Please Enter Phone Number")
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