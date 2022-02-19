import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Confirmpassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit =  (e) => {
    e.preventDefault();
    setError(false);
    try {
      if(password===Confirmpassword)
     {
       
     }
    } catch (err) {
      
      setError(true);
    }
  };

  const checkpasswordvaldiation= (e)=>  {
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
    <div className="register">
      <span className="registerTitle">Create Account</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your First Name..."
          
        />
        <label>Last Name</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your Last Name..."
          
        />

        
        <label>Email</label>
        <input
          type="email"
          className="registerInput"
          placeholder="Enter your email..."
          //onChange={(e) => setEmail(e.target.value)}
        />

      <label>Phone Number</label>
        <input
          type="number"
          className="registerInput"
          placeholder="Enter your Phone Number..."
          
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />

      <label >Confrim Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your Confirm password..."
          onChange={(e)=>checkpasswordvaldiation (e)}
        />
        <div>
          {error}
        </div>
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
         </div>
  );
}
