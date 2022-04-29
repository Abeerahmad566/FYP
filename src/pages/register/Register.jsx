import axios from 'axios'
import React from "react";
import Signup from '../img/signup.jpg'
import { TextField } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import './register.css'
import validator from 'validator'
import useState from 'react-usestateref';
import nophoto from "../img/nophoto.jpg"
const Register = () => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Firstname, setFirstName, FirstnameRef] = useState("");
  const [lastname, setlastName, LastnameRef] = useState("");
  const [phonenumber, setphonenumber] = React.useState("");
  const [Confirmpassword, setConfirmPassword] = React.useState("");
  const [stateimg, setStateimg] = React.useState({
    photo: "",
  });
  const emlverfication = (e) => {
    const eml = e.target.value;
    setEmail(eml);
    if (!validator.isEmail(email)) {
      setError("Enter Valid Email")
    }
    else if (email != "") {
      setError("")
    }
  }
  const fnverfication = () => {
    const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;

    if (!name.test(FirstnameRef.current)) {
      setError("Invalid ")
    }
    else if (FirstnameRef.current !== "") {
      setError("")
    }
  }
  const lnverfication = () => {
    const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;

    if (!name.test(LastnameRef.current)) {
      setError("Invalid ")
    }
    else if (LastnameRef.current !== "") {
      setError("")
    }
  }
  const pnverfication = (e) => {
    setphonenumber(e.target.value);
    if (phonenumber != "") {
      setError("")
    }
  }
  const pssverfication = (e) => {
    const pss = e.target.value;
    setPassword(pss);
    if (password != "") {
      setError("")
    }
  }
  const checkvalidation = (e) => {
    if (Firstname == "") {
      setError("Please Enter First Name")
    }
    else if (lastname == "") {
      setError("Please Enter Last Name")
    }
    else if (email == "") {
      setError("Please Enter Email")
    }
    else if (!email.includes("@")) {
      setError("Enter Valid Email")
    }
    else if (phonenumber == "") {
      setError("Please Enter Phone Number")
    }
    else if (phonenumber.length > 11 || phonenumber.length < 11) {
      setError("Enter 11 digits Number")
    }


    else if (password == "") {

      setError("Please Enter Password")
    }
    else if (Confirmpassword == "") {
      setError("Please Enter Confirm Password")
    }
    else {
      e.preventDefault();
      const formData = new FormData();
      // for (var key of formData.entries()) {
      //   console.log(key[0] + ", " + key[1]);
      // }
      formData.append("fristname", Firstname);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("phonenumber", phonenumber);
      formData.append("password", password);
      formData.append("photo", stateimg.photo);
      console.log(Firstname)
      userService
        .register(formData)
        .then((data) => {
          console.log(data);
          window.location.href = "/login";
        })
        .catch((err) => {
          if (err.response.status == 400) {
            setError("User with Given Email is already Registered")
          }
          console.log(err);
          toast.error("User with Given Email is already Registered", {
            position: "top-right",
            theme: "colored"
          });
        });
    }
  }
  const checkcnfpasswordvaldiation = (e) => {
    const confmpass = e.target.value
    setConfirmPassword(confmpass);
    if (password != confmpass) {
      setError("Both Passwords should Match")
    }
    else {
      setError("");
    }

  }
  const imageFileSelectHandler = (e) => {
    setStateimg({
      photo: e.target.files[0],
    });
  };

  return (
    <div >
      <div className="container">
        <div className="row">

          <div className="col-sm">
            <img className="rgstrpic" src={Signup} alt="" />
          </div>
          <div className="col-sm">
            <span className="rgstrtxt">Register</span>
            <br />
            <label style={{ marginTop: '20px' }}>Enter Your First Name</label>
            <br />
            <TextField
              placeholder="Enter First Name"
              value={Firstname}
              onChange={(e) => {
                setFirstName(e.target.value)
                fnverfication();
              }}
            />{" "}
            <br />
            <label style={{ marginTop: '20px' }}>Enter Your Last Name</label>
            <br />
            <TextField
              placeholder="Enter Last Name"
              value={lastname}
              onChange={(e) => {
                setlastName(e.target.value)
                lnverfication();
              }}
            />{" "}
            <br />
            <label style={{ marginTop: '20px' }}>Enter Your Email</label>
            <br />
            <TextField
              placeholder="Enter Email"
              type="email"
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
              type="number"
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
            <br />
            <TextField
              value={Confirmpassword}
              type="password"
              className="registerInput"
              placeholder="Enter confirm Password"
              onChange={(e) => checkcnfpasswordvaldiation(e)}
            />
            <br />

            <label htmlFor="fileInput">
              <i style={{ background: "aqua", borderRadius: "50px", width: "30px", height: "30px", padding: "6px", marginRight: "60px" }} className=" fas fa-plus fa-lg"></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={imageFileSelectHandler}
            />



            <div style={{ color: "red" }}>{error}</div>
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
      </div>

    </div>
  );
};

export default Register;