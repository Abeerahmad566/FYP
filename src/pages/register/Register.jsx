import axios from 'axios'
import swal from 'sweetalert';
import React from "react";
import Signup from '../img/signup.jpg'
import { TextField } from "@material-ui/core";
import Input from "@material-ui/core/Input";
import userService from "../../services/UserService";
import { toast,ToastContainer } from "react-toastify";
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import './register.css'
import validator from 'validator'
import useState from 'react-usestateref';
import nophoto from "../img/nophoto.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
const Register = (props) => {
  const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Firstname, setFirstName, FirstnameRef] = useState("");
  const [lastname, setlastName, LastnameRef] = useState("");
  const [phonenumber, setphonenumber] = React.useState("");
  const [Confirmpassword, setConfirmPassword] = React.useState("");
  const[nameError,setnameError]=useState("");
  const [phonenumberferror,setphonenumberferror] = useState(false);
  const [phonenumbererror,setphonenumbererror] = useState("");
  const [showPassword,setshowPassword]=useState(false);
  const [showcnfmPassword,setshowcnfmPassword]=useState(false);
  const [passworderror,setpassworderror]=useState(false);
  const [firstnameerror,setfirstnameerror]=useState(false);
  const [lastnameerror,setlastnameerror]=useState(false);
  const [emailerror,setemailerror]=useState(false);
  const [cnfmpassworderror,setcnfmpassworderror]=useState(false);
  const [passwordferror,setpasswordferror]=useState(false);
  const [stateimg, setStateimg] = React.useState({
    photo: "",
  });

  const emlverfication = (e) => {
    const eml = e.target.value;
    setEmail(eml);
    if (!validator.isEmail(email)) {
      setError("Enter Valid Email")
      setemailerror(true)
    }
    else if (validator.isEmail(email)) {
      setError("")
      setemailerror(false)
    }
    else if (email != "") {
      setError("")
      setemailerror(false)
    }
  }

  const pnverfication = (e) => {
    setphonenumber(e.target.value);
      if (
        phonenumber.length === 11 &&
        phonenumber.startsWith("03") &&
        phonenumber.match(/^[0-9]+$/)
    ) 
    {
      setError("")
      setphonenumberferror(false)
      setphonenumbererror("")
    }
    else if (phonenumber != "") {
      setError("")
      setphonenumberferror(false)
      setphonenumbererror("")
    }
    else
    {
      setphonenumberferror(true)
      setphonenumbererror("Please enter a Valid Phone Number")
    }
  }

  const fnverfication = () => {
    const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;

    if (!name.test(FirstnameRef.current)) {
      setnameError("Invalid firstname! It must contain all Alphabets")
      setfirstnameerror(true)
    }
    else if (name.test(FirstnameRef.current)) {
      setnameError("")
      setfirstnameerror(false)
    }
  }
  const lnverfication = () => {
    const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;

    if (!name.test(LastnameRef.current)) {
      setnameError("Invalid lastname! It must contain all Alphabets")
      setlastnameerror(true)
    }
    else if (name.test(LastnameRef.current)) {
      setnameError("")
      setlastnameerror(false)
    }

  }
  const pssverfication = (e) => {
    const pss = e.target.value;
    setPassword(pss);
    if (password != "") {
      setError("")
      setpasswordferror(false)
    }
  }
  const checkvalidation = async(e) => {
    if (Firstname == "") {
      setError("Please Enter First Name")
      toast.error("Please Enter First Name",{
        position: "top-right",
        theme: "colored"
      });
      setfirstnameerror(true)
    }
    else if (lastname == "") {
      setError("Please Enter Last Name")
      toast.error("Please Enter Last Name",{
        position: "top-right",
        theme: "colored"
      });
      setlastnameerror(true)
    }
    else if (email == "") {
      setError("Please Enter Email")
      toast.error("Please Enter Email",{
        position: "top-right",
        theme: "colored"
      });
     setemailerror(true)
    }
    else if (!email.includes("@")) {
      setError("Enter Valid Email")
      setemailerror(true)
    }
    else if (phonenumber == "") {
      setError("Please Enter Phone Number")
      toast.error("Please Enter Phone Number",{
        position: "top-right",
        theme: "colored"
      });
      setphonenumberferror(true)
    }
    // else if (phonenumber.length > 11 || phonenumber.length < 11) {
    //   setError("Enter 11 digits Number")
    //   toast.error("Enter 11 digits Number",{
    //     position: "top-right",
    //     theme: "colored"
    //   });
    // }

     else if (phonenumbererror) {
      setError(phonenumbererror)
      toast.error(phonenumbererror,{
        position: "top-right",
        theme: "colored"
      });
      setphonenumberferror(true)
    }
    

else if (password.length<8)
{
  setError("Please Enter 8 or more Characters Password")
  setpasswordferror(true)

}
    else if (password == "") {

      setError("Please Enter Password")
      setpasswordferror(true)
    }
    else if (Confirmpassword == "") {
      setError("Please Enter Confirm Password")
      setcnfmpassworderror(true)
    }
    else {
      e.preventDefault();
      const formData = new FormData();
      formData.append("firstname", Firstname);
      formData.append("lastname", lastname);
      formData.append("email", email);
      formData.append("phonenumber", phonenumber);
      formData.append("password", password);
      formData.append("photo", stateimg.photo);
     if(error){
      toast.error(error,{
        position: "top-right",
        theme: "colored"
      });
    }
      else if(nameError){
      toast.error(nameError,{
        position: "top-right",
        theme: "colored"
      });
      
     }
     else{
      userService
        .register(formData)
        .then((data) => {
        
          swal({
            title: 'Congratulations!Email Sent SuccessFully ',
            text: "Please Check Your Email to verify! Link will Expire in 1 day",
            icon: 'success',
            button: 'Ok',
          })
        //   .then(function() {
        //     window.location = "/login";
        // });
        
        })
        .catch((err) => {
          console.log(err)
          if (err.response.status == 400) {
            setError("User with Given Email is already Registered")
            toast.error("User with Given Email is already Registered", {
              position: "top-right",
              theme: "colored"
            });
          }
          console.log(err);
          toast.error(err, {
            position: "top-right",
            theme: "colored"
          });
        });
    }
  }
  }
  const showpassword=()=>{
    setshowPassword(!showPassword)

  }
  const showcnfmpassword=()=>{
    
    setshowcnfmPassword(!showcnfmPassword)
  }
  const checkcnfpasswordvaldiation = (e) => {
    const confmpass = e.target.value
    setConfirmPassword(confmpass);
    if (password != confmpass) {
      setError("Both Passwords should Match")
      setcnfmpassworderror(true)
    }
    else {
      setError("");
      setcnfmpassworderror(false)
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
            <label style={{ marginTop: '20px' }}><b>Enter Your First Name</b></label>
            <br />
            <input
              placeholder="John"
              className="registerInput"
              style={firstnameerror?{borderColor:'red'}:{}}
              type='text'
              value={Firstname}
              onChange={(e) => {
                setFirstName(e.target.value)
                fnverfication();
              }}
            />{" "}
            <br />
            <label style={{ marginTop: '20px' }}><b>Enter Your Last Name</b></label>
            <br />
            <input
              placeholder="Doe"
              className="registerInput"
              style={lastnameerror?{borderColor:'red'}:{}}
              value={lastname}
              onChange={(e) => {
                setlastName(e.target.value)
                lnverfication();
              }}
            />{" "}
            <br />
            <label style={{ marginTop: '20px' }}><b>Enter Your Email</b></label>
            <br />
            <input
              placeholder="johndoe@gmail.com"
              style={emailerror?{borderColor:'red'}:{}}
              type="email"
              className="registerInput"
              value={email}
              onChange={(e) => {
                emlverfication(e);
              }}
            />{" "}
            <br />
            <label style={{ marginTop: '20px' }}><b>Enter Your Phone Number</b></label>
            <br />
            <input
              placeholder="03414180005"
              style={phonenumberferror?{borderColor:'red'}:{}}
              type='number'
              className="registerInput"
              value={phonenumber}
              onChange={(e) => {
                pnverfication(e);
              }}
              
            />{" "}
            <br />
            <label style={{ marginTop: '20px' }}><b>Enter Your Password</b></label>
            <br />
            <Input 
              type={showPassword? "text":"password"}
              style={passwordferror?{borderColor:'red'}:{}}
              placeholder="********"
              className="registerInput"
              value={password}
              disableUnderline
              onChange={(e) => {
                pssverfication(e);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={showpassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />{" "}
            <br />
            <label style={{ marginTop: '20px' }} ><b>Enter Confrim Password</b></label>
            <br />
            <Input 
              value={Confirmpassword}
              type={showcnfmPassword? "text":"password"}
              style={cnfmpassworderror?{ BorderColor:'red'}:{}}
              disableUnderline
              className="registerInput"
              placeholder="********"
              onChange={(e) => checkcnfpasswordvaldiation(e)}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={showcnfmpassword}
                  >
                    {showcnfmPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <br />

            <label htmlFor="fileInput">
              {/* <i  className=" fa-solid fa-arrow-up-from-bracket"></i> */}
              <FontAwesomeIcon style={{marginTop:'40%',paddingRight:'10px'}}  icon={faArrowUpFromBracket} className="fa-lg" />
            </label>
            <b>Upload Image<i>(optional)</i></b>
            <input
           
              type="file"
              id="fileInput"
              style={{ display: "none" }}
              onChange={imageFileSelectHandler}
            />
            <div style={{ color: "red" }}>{error}</div>
            <div style={{ color: "red" }}>{nameError}</div>
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
              Register
            </button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
  
};

export default Register;