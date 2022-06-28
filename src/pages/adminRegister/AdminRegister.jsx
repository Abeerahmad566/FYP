import "./AdminRegister.css"
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import React from "react";
import Signup from '../img/signup.jpg'
import { TextField } from "@material-ui/core";
import userService from "../../services/UserService";
import { toast,ToastContainer } from "react-toastify";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import validator from 'validator'
import useState from 'react-usestateref';
import nophoto from "../img/nophoto.jpg"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
import Admin from "../../components/Admin"
const AdminRegister = () => { 
    const [error, setError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [Firstname, setFirstName, FirstnameRef] = useState("");
  const [lastname, setlastName, LastnameRef] = useState("");
  const [phonenumber, setphonenumber] = React.useState("");
  const [Confirmpassword, setConfirmPassword] = React.useState("");
  const[nameError,setnameError]=useState("");
  const[role,setrole]=useState("admin")
  const [phonenumberferror,setphonenumberferror] = useState(false);
  const [phonenumbererror,setphonenumbererror] = useState("")
  const [showPassword,setshowPassword]=useState(false);
  const [showcnfmPassword,setshowcnfmPassword]=useState(false);
  const [passworderror,setpassworderror]=useState(false);
  const [firstnameerror,setfirstnameerror]=useState(false);
  const [lastnameerror,setlastnameerror]=useState(false);
  const [emailerror,setemailerror]=useState(false);
  const [cnfmpassworderror,setcnfmpassworderror]=useState(false);
  const [passwordferror,setpasswordferror]=useState(false);
    function emlverfication  () {
  
        var dot = email.indexOf(".");
        var atSymbol = email.indexOf("@");
    if(atSymbol < 1) {
         return false;
        }
        
 if(dot <= atSymbol + 2) {
  return false;
        }
        if (dot === email.length - 1){
        return false;
        }
       
          return true;
        

        //  if (email != "") {
        //   setError("")
        //   setemailerror(false)
        // }
      }
      const emailvalidation = (e)=>{
        setEmail(e.target.value)
        var result = emlverfication(email);
        if(result)
        {
          setemailerror(false)
        setError("")
      }
        else{
         
        setError("Enter Valid Email")
          setemailerror(true)
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
      const pssverfication = (e) => {
        const pss = e.target.value;
        setPassword(pss);
        if (password != "") {
          setError("")
          setpasswordferror(false)
        }
      }
      const checkvalidation = (e) => {
        if (Firstname == "") {
          setError("Please Enter First Name")
          toast.error("Please Enter First Name",{
            position: "top-right",
            theme: "colored"
          });
        }
        else if (lastname == "") {
          setError("Please Enter Last Name")
          toast.error("Please Enter Last Name",{
            position: "top-right",
            theme: "colored"
          });
        }
        else if (email == "") {
          setError("Please Enter Email")
          toast.error("Please Enter Email",{
            position: "top-right",
            theme: "colored"
          });
          setemailerror(false)
        }
        else if (!email.includes("@")) {
          setError("Enter Valid Email")
       
          toast.error("Enter Valid Email",{
            position: "top-right",
            theme: "colored"
          });
          setemailerror(true)
        }
        else if(emailerror)
        {
          setError("Enter Valid Email")
       
          toast.error("Enter Valid Email",{
            position: "top-right",
            theme: "colored"
          });
        }
        
        else if (phonenumber == "") {
          setError("Please Enter Phone Number")
          toast.error("Please Enter Phone Number",{
            position: "top-right",
            theme: "colored"
          });
          setphonenumberferror(true)
        }
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
      toast.error("Please Enter 8 or more Characters Password",{
        position: "top-right",
        theme: "colored"
      });
      setpasswordferror(true)
    }
        else if (password == "") {
    
          setError("Please Enter Password")
          toast.error("Please Enter Password",{
            position: "top-right",
            theme: "colored"
          });
          setpasswordferror(true)
        }
        else if (Confirmpassword == "") {
          setError("Please Enter Confirm Password")
          toast.error("Please Enter Confirm Password",{
            position: "top-right",
            theme: "colored"
          });
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
          formData.append("role",role)
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
              console.log(data);
              toast.success("New Admin Successfully Registered", {
                position: "top-right",
                theme: "colored"
              });
              setTimeout(function(){
                window.location.href = '/adminpanel';
             }, 2000);
            })
            .catch((err) => {
              if (err.response.status == 400) {
                setError("Admin with Given Email is already Registered")
                toast.error("Admin with Given Email is already Registered", {
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
    function goback()
    {
        window.location.href = "/adminpanel"
    }
    return (
      
      <>
      <Admin>
       <section class="vh-100" style={{ backgroundColor: "#68b1fa" }}>
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class="card text-black" style={{ borderRadius: "25px" }}>
                <div class="card-body p-md-5">
                  <div class="row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ color: "#1e90ff" }}>Register a Admin</p>

                      <form class="mx-1 mx-md-4">

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control"
                              placeholder="Admin First Name"
                              className={firstnameerror? "aregisterInputerror":"aregisterInput"}
                              value={Firstname}
                              onChange={(e) => {
                                setFirstName(e.target.value);
                                fnverfication();
                              } } />

                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="text" id="form3Example1c" class="form-control"
                              placeholder="Admin Last Name"
                              className={lastnameerror?"aregisterInputerror":"aregisterInput"}
                              value={lastname}
                              onChange={(e) => {
                                setlastName(e.target.value);
                                lnverfication();
                              } } />

                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-mobile fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="number" id="form3Example1c" class="form-control"
                              placeholder="Admin Phone Number"
                              className={phonenumberferror?"aregisterInputerror":"aregisterInput"}
                              value={phonenumber}
                              onChange={(e) => {
                                pnverfication(e);
                              } } />


                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="form3Example3c" class="form-control"
                              placeholder="Admin Email"
                              className={emailerror?"aregisterInputerror":"aregisterInput"}
                              value={email}
                              onChange={(e) => {
                                emailvalidation(e);
                              } } />

                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                          <Input 
                              type={showPassword? "text":"password"}
                              className={passwordferror?"aregisterInputerror":"aregisterInput"}
                              style={{width:'189px'}}
                              placeholder="********"
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

                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                          <Input 
              value={Confirmpassword}
              type={showcnfmPassword? "text":"password"}
              className={cnfmpassworderror?"aregisterInputerror":"aregisterInput"}
              disableUnderline
              style={{width:'189px'}}
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

                          </div>
                        </div>

                        <div style={{ color: "red" }}>{error}</div>
            <div style={{ color: "red" }}>{nameError}</div>
                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" class="btn btn-primary btn-lg"

                            onClick={checkvalidation}>Create a admin </button>
                        </div>
                        <div className="menuItem"
                          style={{ marginLeft: "70%" }}>
                          <UilSignOutAlt onClick={() => { window.location.href = "/adminpanel"; } }></UilSignOutAlt>
                        </div>
                      </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        class="img-fluid" alt="Sample image" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer />
        </div>
      </section>
      </Admin>
      </>
)}
export default AdminRegister;
