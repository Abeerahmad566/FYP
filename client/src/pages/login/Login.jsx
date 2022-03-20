import React from "react";
import { TextField } from "@material-ui/core";
import userService from "../../services/UserService";
import login from '../img/login.jpg';
import { Link } from "react-router-dom";
import './login.css'
import {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const [loginerror,setLoginerror]= useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const checkvalidation=()=> {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(email ==""){
      setLoginerror("Email field is empty")
} 
else if(!regex.test(email))
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
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,

      });
    }
    else if(err.response.status==401)
    {
      setLoginerror("Invalid Password")
    }
      
    });
  }
}
  return (
  <><div className="container" >
    <div className="row colWrapper">
      <div className="col-sm imgcolWrapper">
      <img className="imgWrapper"  src={login} alt="" />
      </div>
      <div className="col-sm">
        <span className="lgntxt">Login</span>
        <br />
        <label>Enter Email</label>
        <br />
        <TextField
        type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          } } />
        <br />
        <label style={{ marginTop: '20px' }}>Enter Password</label>
        <br />
        <TextField
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          } } />
        <br />
        <Link className="fgpsslink" to="/enteremail">
        <i >ForgotPassword!</i>
        </Link>
        <br/>
        <Link className="registerlink" to="/register">
        <b >not a user?Register here!</b>
        </Link>
        <br />
        <div style={{color:"red"}}>{loginerror}</div>
        <button
          className="siginbtn"
          onClick={checkvalidation}
        >Sigin
        </button>
        </div>
      </div>
      </div>
      <ToastContainer />
      </>
   
  );
};

export default Login;
