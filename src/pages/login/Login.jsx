import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import userService from "../../services/UserService";
import login from '../img/login.jpg';
import { Link } from "react-router-dom";
import validator from 'validator'
import './login.css'
import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginerror,setLoginerror]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword,setshowPassword]=useState(false)
  const showpassword=()=>{
    setshowPassword(!showPassword)
  }
  const checkvalidation=()=> {
    
    if(email ==""){
      setLoginerror("Email field is empty")
} else if(!validator.isEmail(email))
{
  setLoginerror("Enter Valid Email")
}
else if(password ==""){
  setLoginerror("Password field is empty")
  }
  else{
    userService
    .login(email, password)
    .then((data) => {
      window.location.href = "/home";
    })
    .catch((err) => {
    if(err.response.status==400)
    {
      setLoginerror("Entered Email do not Exist")
      toast.error( "Entered Email do not Exist",{
        position: "top-right",
         theme: "colored" 
      });
    }
    else if(err.response.status==401)
    {
      setLoginerror("Invalid Password")
      toast.error( "Invalid Password",{
        position: "top-right",
        theme:"colored"
      });
    }
    // else if(err.response.status==402)
    // {
    //   swal({
    //     title: 'Oops! Verify Your Email',
    //     text: "An verification link has sent to your email ",
    //     icon: 'error',
    //     button: 'ok ',
    //   });
    // }
     });
  }
}
  return (
  <><div className="container" >
    <div className="row " id="colWrapper">
      <div className="col-sm imgcolWrapper">
      <img className="imgWrapper"  src={login} alt="" />
      </div>
      <div className="col-sm">
        <span className="lgntxt">Login</span>
        <br />
        <label><b>Enter Email</b></label>
        <br />
        <input
        type="email"
          placeholder="johndoe@gmail.com"
          className="registerInput"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          } } />
        <br />
        <label style={{ marginTop: '20px' }}><b>Enter Password</b></label>
        <br />
        <Input
          type={showPassword? "text":"password"}
          disableUnderline
          placeholder="*********"
          className="registerInput"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          } } 
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={showpassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          />
        <br />
        <Link className="fgpsslink" to="/enteremail">
        Forgot Password!
        </Link>
        <br/>
        <Link className="registerlink" to="/register">
        <b >Not a user? Register here!</b>
        </Link>
        <br />
        <div style={{color:"red"}}>{loginerror}</div>
        <button
          className="siginbtn"
          onClick={checkvalidation}
        >Log in 
        </button>
        </div>
      </div>
      </div>
      <ToastContainer />
      </>
   
  );
};

export default Login;
