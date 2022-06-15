import React,{useEffect} from "react";
import axios from "axios";
import "./MultiStep.css";
import infromationService from "../../services/InformationService";
import userService from "../../services/UserService";
import {RadioGroup,FormControlLabel,Radio } from "@material-ui/core";
import { DropdownButton ,Dropdown, SplitButton} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import Box from '@mui/material/Box';
import { toast, ToastContainer } from "react-toastify";
import  useState from 'react-usestateref';
import TopBar from "../TopBar/Topbar";
import Button from 'react-bootstrap/Button'
import {Stepper,StepLabel,Step} from "@material-ui/core"
import CircularProgress from '@mui/material/CircularProgress';
import {makeStyles } from "@material-ui/core"
import { Tick } from 'react-crude-animated-tick';
import {Table} from "react-bootstrap"
import bg from "../img/bg.jpg"
import validator from 'validator'

const MultiStep = () => {
  const userRole= userService.getLoggedInUser().role;
  const[age,setage,ageRef]= useState("");
  const[CurrentJobYears,setCurrentJobYears,currentjobyearsRef]= useState("");
  const[CurrentHouseYears,setCurrentHouseYears,currenthouseyearsRef]= useState("");
  const[income,setincome,incomeRef]= useState("");
  const[married,setmarried]= useState("")
  const[Profession,setProfession]= useState("Select Profession");
  const[CarOwnership,setCarOwnership]= useState("");
  const[HouseOwnership,setHouseOwnership]= useState("Select House OwnerShip");
  const[Experience,setExperience,experienceRef]= useState("");
  const [result,setresult]=useState("");
  const [error, setError] = useState("");
  const [orgerror, setorgError] = useState("");
  const[firstStep,setfirstStep]= useState(true)
  const[secondStep,setsecondStep]= useState(false)
  const[thirdStep,setthirdStep]= useState(false)
  const[secondbackButton,setsecondbackButton]=useState(false)
const userid = userService.getLoggedInUser()._id;
const[firstnextbtn,setfirstnextbtn]=useState(true)
const[Secondnextbtn,setSecondnextbtn]=useState(false)
const[showresult,setshowresult]=useState(false)
const[thirdbackButton,setthirdbackButton]=useState(false)
const[Submitbtn,setsubmitBtn]=useState(false)
const [loanamount, setloanamount,LoanamountRef] = useState("");
const [email, setEmail] = React.useState(userService.getLoggedInUser().email);
const[nameError,setnameError]=useState("");
  const [firstname, setfirstName, FirstnameRef] = useState(userService.getLoggedInUser().firstname);
  const [lastname, setlastName, LastnameRef] = useState(userService.getLoggedInUser().lastname);
const[cnic,setcnic]=useState("");
const[address,setaddress]=useState("");
const [photo, setphoto] = useState([]);
const[designation,setdesignation]=useState("");
const[organizationname,setorganizationname,OrganizationnameRef]=useState("");
const[organizationaddress,setorganizationaddress]=useState("");
const useStyles = makeStyles(() => ({
  root: {
    "& .MuiStepIcon-active": { color: "#005CA9", fontSize: "1.6rem",
  '@media(max-width:500px)':{color: "#005CA9", fontSize: "1rem"},
  },
    "& .MuiStepLabel-active": { color: "#005CA9", fontSize: "1.6rem",
    '@media(max-width:500px)':{color: "#005CA9", fontSize: "1rem"},
   },
    "& .MuiStepIcon-completed": { color: "#005CA9", fontSize: "1.5rem" ,
    '@media(max-width:500px)':{color: "#005CA9", fontSize: "0.8rem"},
  },
    "& .MuiStepLabel-completed": { color: "#005CA9", fontSize: "1.5rem",
    '@media(max-width:500px)':{color: "#005CA9", fontSize: "0.8rem"},
  },
    "& .Mui-Z .MuiStepIcon-root": {
      color: "grey",
      fontSize: "1.5rem",
      '@media(max-width:500px)':{color: "grey", fontSize: "0.8rem"},
    },
  },
}));

const c = useStyles();
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
    setnameError("Invalid firstname! It must contain all Alphabets")
  }
  else if (name.test(FirstnameRef.current)) {
    setnameError("")
  }
}
const lnverfication = () => {
  const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;

  if (!name.test(LastnameRef.current)) {
    setnameError("Invalid lastname! It must contain all Alphabets")
  }
  else if (name.test(LastnameRef.current)) {
    setnameError("")
  }
}
const cnicvalidation=(e)=>{
  var regexp = new RegExp('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$');
  setcnic(e.target.value)
  if (!regexp.test(cnic)) {
    setError("Please Enter Valid CNIC")
}
    else if(regexp.test(cnic)){
      setError("")
    }
}
const addressvalidation=(e)=>{
  setaddress(e.target.value)
}
const designationvalidation=(e)=>{
  setdesignation(e.target.value)
}
const organizationnamevalidation=(e)=>{
  setorganizationname(e.target.value)
  const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;
  if (!name.test(OrganizationnameRef.current)) {
    setorgError("Invalid Organization Name! It must contain all Alphabets")
  }
  else if (name.test(OrganizationnameRef.current)) {
    setorgError("")
  }

}
const organizationaddressvalidation=(e)=>{
  setorganizationaddress(e.target.value)
}
const postdata =(e)=>
{
if(result){
    const formData = new FormData();
    Object.values(photo).forEach(photo=>{
      formData.append("photo", photo);
    });
    formData.append("userid", userid);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
      formData.append("age", age);
      formData.append("income", income);
      formData.append("carownership", CarOwnership);
      formData.append("currenthouseyears", CurrentHouseYears);
      formData.append("married", married);
      formData.append("profession", Profession);
      formData.append("currentjobyears", CurrentJobYears);
      formData.append("experience", Experience);
      formData.append("Houseownership", HouseOwnership);
      formData.append("cnic", cnic);
      formData.append("address", address);
      formData.append("designation", designation);
      formData.append("organizationname", organizationname);
      formData.append("organizationaddress", organizationaddress);
      formData.append("loanamount", loanamount);
      formData.append("result", result);
      formData.append("userRole",userRole)
      if(result=='Approved')
      {
        if(userRole=='superAdmin')
        {
          formData.append("status","Approved")
        }
        else if(userRole=='admin')
        {
          formData.append("status","Approved")
        }
        else{
      formData.append("status","Pending")
        }
      }
      else{
        formData.append("status","Rejected")
      }
infromationService
      .addInformation(formData)

        .then(() => {
        
        })
        .catch((err) => {
          console.log(err);
        }); 

}
}
React.useEffect(postdata,[result])

const onChangephoto = (e) => {
  console.log(e.target.files);
  setphoto(e.target.files)
};

const HouseOwnershipval=(e)=>{
  setHouseOwnership(e)
  
    if(HouseOwnership!="")
    {
setError("")
    }
  
}
  const agevalidation=(e)=>{
    setage(e.target.value)
    if(ageRef.current.includes("-")){
      setage("")
    }
    if(age!=""){
      setError("")
    }
  }
  const loanamountvalidation=(e)=>{

      
    setloanamount(e.target.value)
    if(LoanamountRef.current.includes("-")){
      setloanamount("")
    }
    if(loanamount!=""){
      setError("")
    }
  }
  const profnvalidation=(e)=>{
    
     setProfession(e)
   if(Profession!=""){
      setError("")
    }
  }

  const incmevalidation=(e)=>{
    
      setincome(e.target.value)
      if(incomeRef.current.includes("-")){
        setincome("")
      }
  else if(income!=""){
      setError("")
    }
  }

  const crhouseyearsvalidation=(e)=>{
    
      setCurrentHouseYears(e.target.value)
      if(currenthouseyearsRef.current.includes("-")){
        setCurrentHouseYears("")
      }
     else if(CurrentHouseYears!=""){
      setError("")
    }
  }

  const crjobyearsvalidation=(e)=>{
    setCurrentJobYears(e.target.value)
    if(currentjobyearsRef.current.includes("-")){
      setCurrentJobYears("")
    }
    if(CurrentJobYears!=""){
      setError("")
    }
  }


  const expvalidation=(e)=>{
   
      setExperience(e.target.value)
      if(experienceRef.current.includes("-")){
        setExperience("")
      }
    else if(Experience!=""){
      setError("")
    }
  }

  const checkvaldiation= async()=>  {
    if(age==""){
      toast.error("Please Enter Age", {
        position: "top-right",
        theme: "colored"
      });
    }
   else if(income==""){toast.error("Please Enter Income", {
    position: "top-right",
    theme: "colored"
  });}
   else if(CarOwnership=="")
   {
     
   toast.error("Please Enter CarOwnership", {
    position: "top-right",
    theme: "colored"
  });
}
   else if(married==""){toast.error("Please Select Martial Status", {
    position: "top-right",
    theme: "colored"
  });}
   else if(CurrentJobYears==""){toast.error("Please Enter Current Job Years", {
    position: "top-right",
    theme: "colored"
  });}
   else if(Profession=="Select Profession"){toast.error("Please Enter Profession", {
    position: "top-right",
    theme: "colored"
  });}
   else if(HouseOwnership=="Select House OwnerShip")
   {
     
     toast.error("Please Select HouseOwnership", {
      position: "top-right",
      theme: "colored"
    });
  }
   else if(CurrentHouseYears=="")
   {
     
   toast.error("Please Enter CurrentHouseYears", {
    position: "top-right",
    theme: "colored"
  });}
   else if(Experience=="")
   {
    toast.error("Please Enter Experience", {
      position: "top-right",
      theme: "colored"
    });
   }
   else if(cnic=="")
   {
    toast.error("Please Enter CNIC", {
      position: "top-right",
      theme: "colored"
    });
   }
   else if(address=="")
   {
    toast.error("Please Enter Address", {
      position: "top-right",
      theme: "colored"
    });
  }
    
    
    else if(designation=="")
    {
      toast.error("Please Enter Your Designation", {
        position: "top-right",
        theme: "colored"
      });
    }
    else if(organizationname=="")
    {
      toast.error("Please Enter Your Organization Name", {
        position: "top-right",
        theme: "colored"
      });
    }
    else if(organizationaddress=="")
    {
      toast.error("Please Enter Your Organization Address", {
        position: "top-right",
        theme: "colored"
      });
    }
   
    else if(photo=="")
    {
      toast.error("Please Upload Your CNIC Photo, Job/Business Card, Electricity,Gas,Water Bills Photo", {
        position: "top-right",
        theme: "colored"
      });
    }
    else if(photo.length<1)
    {
      setError("Please Upload Your CNIC Photo, Job/Business Card, Electricity,Gas,Water Bills Photo")
      toast.error("Please Upload Your CNIC Photo, Job/Business Card, Electricity,Gas,Water Bills Photo", {
        position: "top-right",
        theme: "colored"
      });
    }
    
    else if(loanamount <20000 ||loanamount>=200000)
    {
      toast.error("Please Enter Loan Amount between 20,000 and 200,000", {
        position: "top-right",
        theme: "colored"
      });
    }
    else if(loanamount=="")
    {
      toast.error("Please Enter Your Loan Amount", {
        position: "top-right",
        theme: "colored"
      });
    }
else{
  setshowresult(true)
  setthirdStep(false)
  setthirdbackButton(false)
  setsubmitBtn(false)
   await axios.post("https://loanpredictionfypapi.herokuapp.com/api/informations/predict",{
    Income:income,
    Age:age,
    Experience:Experience,
    MarriedSingle:married,
    House_Ownership:HouseOwnership,
    Car_Ownership:CarOwnership,
    Profession:Profession,
    CURRENT_JOB_YRS:CurrentJobYears,
    CURRENT_HOUSE_YRS:CurrentHouseYears,
  })
  .then((response) => {
  console.log(response.data.Status)  
  setresult(response.data.Status)
  })
  .catch((error) => console.log(error));
  }
  }

  const [users, setusers] = useState([""])
  const getdata=()=>{
   userService
               .getUser(userid)
               .then((data) => {  
               setusers(data)
               console.log(data)
               })
               .catch((err) => {
                 console.log(err);
                
               });
}
useEffect(getdata, []);

const handleNextStep=()=>{
  
  if (firstname == "") {
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
  }
  else if (!email.includes("@")) {
    setError("Enter Valid Email")
  }
  var regexp = new RegExp('^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$');
  setresult("")
  if(cnic=="")
  {
    toast.error("Please Enter CNIC", {
      position: "top-right",
      theme: "colored"
    });
  }
 
  else if (!regexp.test(cnic)) {
    setError("Please Enter Valid CNIC")
    toast.error("Please Enter Valid CNIC ", {
      position: "top-right",
      theme: "colored"
    });

}
// else if (regexp.test(cnic)) {
//   setError("")
  
// }

  else if(address=="")
  {
    toast.error("Please Enter  House Address", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(age<18)
  {
    toast.error("Age Must be 18 or Above", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(age==""){
  
    toast.error("Please Enter Age", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(married=="")
  {
   
  toast.error("Please Enter Martial Status", {
    position: "top-right",
    theme: "colored"
  });
}
else if(error){
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
   
   setError("")
  //onfirstpage
  setfirstStep(false)
  setsecondStep(true)
  setthirdStep(false)

  setfirstnextbtn(false)
  setSecondnextbtn(true)

  setsecondbackButton(true)
 }
 }
const handleNextStepsecond=()=>{
  if(CurrentJobYears=="")
  {
  
    toast.error("Please Enter CurrentJobYears", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(CurrentJobYears>40)
  {
    toast.error("Job Years must be less than 40 years", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(income<1000)
  {
    setError("Income must not be less than 1000")
    toast.error("Income must not be less than 1000", {
      position: "top-right",
      theme: "colored"
    });
  }
  
  else if(income=="")
  {
    setError("Please Enter income")
    toast.error("Please Enter income", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(Experience>40)
   {
    setError("Experience must not be greater than 30")
    toast.error("Experience must not be greater than 30", {
      position: "top-right",
      theme: "colored"
    });
   }
 else if(Experience=="")
   {
    setError("Please Enter Experience")
    toast.error("Please Enter Experience", {
      position: "top-right",
      theme: "colored"
    });
   }
 else if(Profession=="Select Profession")
 {
   setError("Please Select Profession")
   toast.error("Please Select Profession", {
    position: "top-right",
    theme: "colored"
  });
  }
  else if(orgerror)
{
  console.log(orgerror)
  toast.error(orgerror, {
    position: "top-right",
    theme: "colored"
  });
}
  else if(designation=="")
  {
    toast.error("Please Enter Your Designation", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(organizationname=="")
  {
    toast.error("Please Enter Your Organization Name", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(organizationaddress=="")
  {
    toast.error("Please Enter Your Organization Address", {
      position: "top-right",
      theme: "colored"
    });
  }
 
    
 else {

  setError("")
  //onsecondpage
  setfirstStep(false)
  setsecondStep(false)
  setthirdStep(true)

  setSecondnextbtn(false)
  setthirdbackButton(true)
   
  setsecondbackButton(false)
  setthirdbackButton(true)

  setsubmitBtn(true)
 }
 }

const handlebackButton=()=>{
  setError("")
  //onsecondpage
setsecondStep(false)
setfirstStep(true)
setthirdStep(false)

setsecondbackButton(false)
setSecondnextbtn(false)
setfirstnextbtn(true)

}
const handlebackButtonthird=()=>{
  setError("")
  //onthirdpage

setsecondStep(true)
setfirstStep(false)
setthirdStep(false)

setthirdbackButton(false)
setsecondbackButton(true)

setSecondnextbtn(true)

setsubmitBtn(false)
} 
const steps = [
  'Personal Information',
  'Job Related Information',
  'Other',
];

  return(
    <><div >

      <TopBar user={users}/>


      <Box >
        <Stepper
        className={c.root}
        activeStep={firstStep ? 0 : secondStep ? 1 : 2}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    
     

      <div className="container">
        <div className="firstStep">
        {firstStep &&
          <><div >
            
             <label ><b>First Name</b></label>
            <input  class="form-control firstname" type="text"  InputProps={{ disableUnderline: true }}
          value={firstname}
          onChange={(e) => {
            setfirstName(e.target.value)
            fnverfication();
          }}
              />
               <label ><b>Last Name</b></label>
            <input  class="form-control lastname" type="text" value={lastname} 
             onChange={(e) => {
              setlastName(e.target.value)
              lnverfication();
            }}
            InputProps={{ disableUnderline: true }}
          
              />
               <label ><b>Email</b></label>
            <input  class="form-control email" type="text" value={email} 
            InputProps={{ disableUnderline: true }}
            onChange={(e) => {
              emlverfication(e);
            }}  
            />
               <label ><b>CNIC</b></label>
              
            <input  class="form-control cnic" type="text" placeholder="e.g 11111-1111111-1" InputProps={{ disableUnderline: true }}
              value={cnic}
              onChange={(e) => {
                cnicvalidation(e);
              } } />
            <label ><b> House Address</b></label>
            <textarea className="form-control address"   rows="6" placeholder="House no, Street no, Area, City, Country" name="message"
              value={address}
              onChange={(e) => {
                addressvalidation(e);
              } } 
              />
               <label ><b>Age</b></label>
            <input  class="form-control age" type="number" placeholder="Above 18" InputProps={{ disableUnderline: true }}
              value={age}
              onChange={(e) => {
                agevalidation(e);
              } } />
              <label class="mt-4" ><b>Martial Status</b></label>
              <RadioGroup value={married}>
              <FormControlLabel value="married" control={<Radio checked={married.length === 0 ? false : married.includes("married") ? true : false} />} label="Married" onChange={() => setmarried("married")} />
              <FormControlLabel value="single" control={<Radio checked={married.length === 0 ? false : married.includes("single") ? true : false} />} label="Single" onChange={() => setmarried("single")} />
            </RadioGroup>

            </div>

          </>
          }
          </div>
          <div className="secondStep">
        {secondStep &&
          <><label class="mt-4" ><b>Current Job Years</b></label>
          <input  class="form-control currentjobyears" type="number" placeholder="Years of experience in the current job" InputProps={{ disableUnderline: true }}
            value={CurrentJobYears}
            onChange={(e) => {
              crjobyearsvalidation(e);
            } } />

            <label class="mt-4" ><b>Income</b></label>
            <input  class="form-control income" type="number" placeholder="e.g: 90000 PKR"
              value={income}
              onChange={(e) => {
                incmevalidation(e);
              } } />

            <label class="mt-4" ><b>Job Experience</b></label>
            <input  class="form-control jobexperience"  type="number" placeholder="Professional experience of the user in years"
              value={Experience}
              onChange={(e) => {
                expvalidation(e);
              } } />

              


<label class="mt-4" ><b>Profession</b></label>
<DropdownButton style={{marginLeft:'-1%'}}  id="dropdown-basic-button" title={Profession} size="md"
              drop={"down"}
              onSelect={(e) => profnvalidation(e)}>
              <Dropdown.Item eventKey="Mechanical_engineer">Mechanical Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Software_Developer">Software Developer</Dropdown.Item>
              <Dropdown.Item eventKey="Technical_writer">Technical Writer</Dropdown.Item>
              <Dropdown.Item eventKey="Civil_servant">Civil Servant</Dropdown.Item>
              <Dropdown.Item eventKey="Librarian">Librarian</Dropdown.Item>
              <Dropdown.Item eventKey="Economist">Economist</Dropdown.Item>
              <Dropdown.Item eventKey="Flight_attendant">Flight Attendant</Dropdown.Item>
              <Dropdown.Item eventKey="Petroleum_Engineer">Petroleum Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Chartered_Accountant">Chartered Accountant</Dropdown.Item>
              <Dropdown.Item eventKey="Architect">Architect</Dropdown.Item>
              <Dropdown.Item eventKey="Secretary">Secretary</Dropdown.Item>
              <Dropdown.Item eventKey="Technician">Technician</Dropdown.Item>
              <Dropdown.Item eventKey="Chemical_engineer">Chemical Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Design_Engineer">Design Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Microbiologist">Microbiologist</Dropdown.Item>
              <Dropdown.Item eventKey="Police_officer">Police Officer  </Dropdown.Item>
              <Dropdown.Item eventKey="Fashion_Designer">Fashion Designer</Dropdown.Item>
              <Dropdown.Item eventKey="Artist">Artist</Dropdown.Item>
              <Dropdown.Item eventKey="Aviator">Aviator</Dropdown.Item>
              <Dropdown.Item eventKey="Psychologist">Psychologist</Dropdown.Item>
              <Dropdown.Item eventKey="Magistrate">Magistrate</Dropdown.Item>
              <Dropdown.Item eventKey="Lawyer">Lawyer</Dropdown.Item>
              <Dropdown.Item eventKey="Dentist">Dentist</Dropdown.Item>
              <Dropdown.Item eventKey="Firefighter">Firefighter</Dropdown.Item>
              <Dropdown.Item eventKey="Politician">Politician</Dropdown.Item>
              <Dropdown.Item eventKey="Air_traffic_controller">Air Traffic Controller  </Dropdown.Item>
              <Dropdown.Item eventKey="Petroleum_Engineer">Petroleum Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Official">Official</Dropdown.Item>
              <Dropdown.Item eventKey="Analyst">Analyst</Dropdown.Item>
              <Dropdown.Item eventKey="Geologist">Geologist</Dropdown.Item>
              <Dropdown.Item eventKey="Surveyor">Surveyor</Dropdown.Item>
              <Dropdown.Item eventKey="Hotel_Manager">Hotel Manager</Dropdown.Item>
              <Dropdown.Item eventKey="Comedian">Comedian</Dropdown.Item>
              <Dropdown.Item eventKey="Biomedical_Engineer">Biomedical Engineer</Dropdown.Item>

              <Dropdown.Item eventKey="Graphic_Designer">Graphic Designer</Dropdown.Item>
              <Dropdown.Item eventKey="Computer_hardware_engineer">Computer Hardware Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Computer_operator">Computer Operator</Dropdown.Item>
              <Dropdown.Item eventKey="Drafter">Drafter</Dropdown.Item>
              <Dropdown.Item eventKey="Statistician">Statistician</Dropdown.Item>
              <Dropdown.Item eventKey="Web_designer">Web Designer</Dropdown.Item>
              <Dropdown.Item eventKey="Consultant">Consultant</Dropdown.Item>
              <Dropdown.Item eventKey="Chef">Chef</Dropdown.Item>

              <Dropdown.Item eventKey="Army_officer">Army Officer</Dropdown.Item>
              <Dropdown.Item eventKey="Surgeon">Surgeon</Dropdown.Item>
              <Dropdown.Item eventKey="Civil_engineer">Civil Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Scientist">Scientist</Dropdown.Item>

              <Dropdown.Item eventKey="Industrial_Engineer">Industrial Engineer</Dropdown.Item>
              <Dropdown.Item eventKey="Technology_specialist">Technology Specialist</Dropdown.Item>

              </DropdownButton>

              <label class="mt-4" ><b>Designation</b></label>
            <input  class="form-control designation"  type="text" placeholder="e.g: OG2"
              value={designation}
              onChange={(e) => {
                designationvalidation(e);
              } } />

<label class="mt-4" ><b>Organization Name</b></label>
            <input  class="form-control organizationname"  type="text" placeholder="e.g: Abeer Solutions"
              value={organizationname}
              onChange={(e) => {
                organizationnamevalidation(e);
              } } />

<label class="mt-4" ><b>Organization Address</b></label>
<textarea className="form-control organizationaddress"   rows="6" placeholder="Staff Welfare Organization G-6, Aabpara, Islamabad." name="message"
              value={organizationaddress}
              onChange={(e) => {
                organizationaddressvalidation(e);
              } } 
              />
          </>}
          </div>
          <div className="thirdStep">
        {thirdStep &&
          <>
            <label ><b>Car OwnerShip</b></label><RadioGroup>
              <FormControlLabel value="Yes" control={<Radio checked={CarOwnership.length === 0 ? false : CarOwnership.includes("yes") ? true : false} />} label="Yes" onChange={() => setCarOwnership("yes")} />
              <FormControlLabel value="No" control={<Radio checked={CarOwnership.length === 0 ? false : CarOwnership.includes("no") ? true : false} />} label="No" onChange={() => setCarOwnership("no")} />
            </RadioGroup>

            <label class="mt-4" ><b>Residence Duration</b></label>
            <input class="form-control currenthouseyears" type="number" placeholder="Number of years in the current residence"
              value={CurrentHouseYears}
              onChange={(e) => {
                crhouseyearsvalidation(e);
              } } />
<label class="mt-4" ><b>House Ownership</b></label>
              <DropdownButton id="dropdown-basic-button" style={{marginLeft:'-1%'}} title={HouseOwnership} size="sm"
              onSelect={(e) => HouseOwnershipval(e)}>
              <Dropdown.Item eventKey="rented">Rented</Dropdown.Item>
              <Dropdown.Item eventKey="owned">Owned</Dropdown.Item>
              <Dropdown.Item eventKey="norent_noown">Other</Dropdown.Item>
            </DropdownButton>
            <label ><b>Upload CNIC, Job/Business Card, Bills Images</b></label>
         <br/>
          <input
            type='file'
            className='file'
            multiple
            onChange={(e)=>onChangephoto(e)}
          />
          <i style={{fontSize:'0.9rem',color:'grey'}}>(jpeg,png,file)</i>
          <br/>
         <i style={{fontSize:'0.9rem',color:'grey'}}>(Front back cnic and job card and each electricity,gas and water bills image)</i>
         <br/>
            <label class="mt-4" ><b>Loan Amount</b></label>
            <input class="form-control loanamount" type="number" placeholder="You can Maximam loan of 200,000"
              value={loanamount}
              onChange={(e) => {
                loanamountvalidation(e);
              } } />
          </>}
          </div>
        <br />
        {secondbackButton &&
          <Button className="secondStep" variant="outline-primary" onClick={handlebackButton}>
            Back</Button>}
        {firstnextbtn &&
          <Button className="firstStep"  variant="outline-primary" onClick={handleNextStep}>
            Next</Button>}
        {thirdbackButton && <Button className="thirdStep" variant="outline-primary" onClick={handlebackButtonthird}>
          Back</Button>}
        {Secondnextbtn &&
          <Button variant="outline-primary"className="nextStepsecond" onClick={handleNextStepsecond}>
            Next</Button>}
        {Submitbtn &&
          <Button variant="outline-primary" className="submitprediction"onClick={checkvaldiation}>
            Submit</Button>}
        {showresult &&
          <>

            <div className="resultb">
              
              <br />
            {!result&&
              <CircularProgress style={{marginLeft: "45%"}} />
            }
              <div style={{ marginLeft: "20%" }}>
                {result && result=="Approved"? userRole=="user"?
    
                <div className="">
                   
                <Table striped bordered hover>
               <thead>
                 <tr>
                   <th><b>Age</b></th>
                   <th><b>Income</b></th>
                   <th><b>Car Ownership</b></th>
                   <th><b>RelationShip Status</b></th>
                   <th><b>Current House Years</b></th>
                   <th><b>Profession</b></th>
                   <th><b>Current Job Years</b></th>
                   <th><b>Experience</b></th>
                   <th><b>House Ownership</b></th>
                   <th><b>Prediction Result</b></th>
                 
                 </tr>
               </thead>
               <tbody>
               <tr>
                  <td style={{textAlign:'center'}} >{age}</td>
                  <td  style={{textAlign:'center'}}>{income}</td>
                  <td  style={{textAlign:'center'}}>{CarOwnership}</td>
                  <td style={{textAlign:'center'}}> {married}</td>
                  <td style={{textAlign:'center'}}>{CurrentHouseYears}</td>
                  <td style={{textAlign:'center'}} >{Profession}</td>
                  <td style={{textAlign:'center'}} >{CurrentJobYears}</td>
                  <td style={{textAlign:'center'}} >{Experience}</td>
                  <td style={{textAlign:'center'}} >{HouseOwnership}</td>
                  <td style={{textAlign:'center'}} >{result}</td>
                  </tr>
               </tbody>
               </Table>
               <b style={{color:'green'}}>Conditional Loan is awaited to Approved against these Information</b>
                   <Tick size={100} />
               <p style={{color:'red'}}>Credentials Verification required by Bank Adminstration</p>
                </div>
          :
          <div className="">
                   
          <Table striped bordered hover>
         <thead>
           <tr>
             <th><b>Age</b></th>
             <th><b>Income</b></th>
             <th><b>Car Ownership</b></th>
             <th><b>RelationShip Status</b></th>
             <th><b>Current House Years</b></th>
             <th><b>Profession</b></th>
             <th><b>Current Job Years</b></th>
             <th><b>Experience</b></th>
             <th><b>House Ownership</b></th>
             <th><b>Prediction Result</b></th>
           
           </tr>
         </thead>
         <tbody>
         <tr>
            <td style={{textAlign:'center'}} >{age}</td>
            <td  style={{textAlign:'center'}}>{income}</td>
            <td  style={{textAlign:'center'}}>{CarOwnership}</td>
            <td style={{textAlign:'center'}}> {married}</td>
            <td style={{textAlign:'center'}}>{CurrentHouseYears}</td>
            <td style={{textAlign:'center'}} >{Profession}</td>
            <td style={{textAlign:'center'}} >{CurrentJobYears}</td>
            <td style={{textAlign:'center'}} >{Experience}</td>
            <td style={{textAlign:'center'}} >{HouseOwnership}</td>
            <td style={{textAlign:'center'}} >{result}</td>
            </tr>
         </tbody>
         </Table>
         <b style={{color:'green'}}>Conditional Loan is Approved against these Information</b>
             <Tick size={100} />
       
          </div>
                :result=="Rejected"?
                
                
                <>
             <Table striped bordered hover>
            <thead>
              <tr>
                <th><b>Age</b></th>
                <th><b>Income</b></th>
                <th><b>Car Ownership</b></th>
                <th><b>RelationShip Status</b></th>
                <th><b>Current House Years</b></th>
                <th><b>Profession</b></th>
                <th><b>Current Job Years</b></th>
                <th><b>Experience</b></th>
                <th><b>House Ownership</b></th>
                <th><b>Prediction Result</b></th>
              
              </tr>
            </thead>
            <tbody>
            <tr>
                <td style={{textAlign:'center'}} >{age}</td>
                <td  style={{textAlign:'center'}}>{income}</td>
                <td  style={{textAlign:'center'}}>{CarOwnership}</td>
                <td style={{textAlign:'center'}}> {married}</td>
                <td style={{textAlign:'center'}}>{CurrentHouseYears}</td>
                <td style={{textAlign:'center'}} >{Profession}</td>
                <td style={{textAlign:'center'}} >{CurrentJobYears}</td>
                <td style={{textAlign:'center'}} >{Experience}</td>
                <td style={{textAlign:'center'}} >{HouseOwnership}</td>
                <td style={{textAlign:'center'}} >{result}</td>
                </tr>
            </tbody>
            </Table>
            <b style={{color:'red'}}>Conditional Loan Rejected against these Information</b>
                {/* <div  class="cross-icon cross-delete animateDeleteIcon" style="display: block;">
                <span class="cross-x-mark animateXMark"/>
                  <span class="cross-delete-line cross-delete-left"></span>
                  <span class="cross-delete-line cross-delete-right"></span>
                  </div>  */}
                  </>
            :"" }
              </div>


            </div>
            <Button className="predictagainbtn" variant="outline-info" onClick={() => {  window.location.href = "/predictionPage" } }>Predict Again</Button>
          </>}
          
      </div>


    </div>
    <br></br>
    <br></br>
    <ToastContainer/>
    <Footer /></>
)}
export default MultiStep;