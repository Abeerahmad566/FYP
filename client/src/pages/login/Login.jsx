import React from "react";
import { TextField } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
import login from '../img/login.jpg';
import { Link } from "react-router-dom";
import './login.css'
const Login = () => {
  const {loginerror,setloginerror}=React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const checkvalidation=(e)=> {
    if(email ==""){
      setloginerror("email field is empty")
} 
else if(password ==""){
  setloginerror("password field is empty")
  }
  else{
    userService
    .login(email, password)
    .then((data) => {
      console.log(data);
      window.location.href = "/home";
    })
    .catch((err) => {
      toast.error(err.response.data, {
        position: toast.POSITION.TOP_LEFT,
      });
    });
  }
}
  return (
  <><div
    >
      <img className="lgnpic" src={login} alt="" />
      </div><div className="full">
        <span className="lgntxt">Login</span>
        <br />
        <label>Enter Email</label>
        <br />
        <TextField

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
          
      </div></>
   
  );
};

export default Login;
