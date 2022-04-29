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
import Topbar from "../TopBar/Topbar";
import Button from 'react-bootstrap/Button'
import {Stepper,StepLabel,Step} from "@material-ui/core"
import CircularProgress from '@mui/material/CircularProgress';
const MultiStep = () => {
  const[age,setage,ageRef]= useState("");
  const[CurrentJobYears,setCurrentJobYears]= React.useState("");
  const[CurrentHouseYears,setCurrentHouseYears]= React.useState("");
  const[income,setincome]= React.useState("");
  const[married,setmarried]= React.useState("")
  const[Profession,setProfession]= React.useState("Select Profession");
  const[CarOwnership,setCarOwnership]= React.useState("");
  const[HouseOwnership,setHouseOwnership]= React.useState("Select House OwnerShip");
  const[Experience,setExperience]= React.useState("");
  const [result,setresult]=React.useState("");
  const [error, setError] = React.useState("");
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
const [progress, setProgress] = React.useState(0);


const postdata =()=>
{
if(result){
infromationService
      .addInformation(userid,age,income,CarOwnership,CurrentHouseYears,married,Profession,CurrentJobYears,Experience,HouseOwnership,result)
        .then(() => {
          setage("")
          setincome("")
          setCarOwnership("")
          setCurrentHouseYears("")
          setCurrentJobYears("")
          setmarried("")
          setExperience("")
         setProfession("Select Profession")
         setHouseOwnership("Select House OwnerShip")
        
        })
        .catch((err) => {
          console.log(err);
        });
}
}
React.useEffect(postdata,[result])

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

  const profnvalidation=(e)=>{
    
     setProfession(e)
   if(Profession!=""){
      setError("")
    }
  }

  const incmevalidation=(e)=>{
    
      setincome(e.target.value)
   if(income!=""){
      setError("")
    }
  }

  const crhouseyearsvalidation=(e)=>{
    
      setCurrentHouseYears(e.target.value)
     if(CurrentHouseYears!=""){
      setError("")
    }
  }

  const crjobyearsvalidation=(e)=>{
    setCurrentJobYears(e.target.value) 
    if(CurrentJobYears!=""){
      setError("")
    }
  }


  const expvalidation=(e)=>{
   
      setExperience(e.target.value)
    if(Experience!=""){
      setError("")
    }
  }

  const checkvaldiation= async()=>  {
    if(age==""){
      setError("Please Enter Age")
    }
   else if(income==""){setError("Please Enter income")}
   else if(CarOwnership=="")
   {
     
   toast.error("Please Enter CarOwnership", {
    position: "top-right",
    theme: "colored"
  });
}
   else if(married==""){setError("Please Enter RelationShip Status")}
   else if(CurrentJobYears==""){setError("Please Enter CurrentJobYears")}
   else if(Profession=="Select Profession"){setError("Please Select Profession")}
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
    setError("Please Enter Experience")
   }
else{
  setshowresult(true)
  setthirdStep(false)
  setthirdbackButton(false)
  setsubmitBtn(false)
  // await axios.post("https://loanpredictionfyp.herokuapp.com/api/informations/predict",{
 await axios.post("http://localhost:4000/api/informations/predict",{
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
  setresult("")
  if(age==""){
  
    toast.error("Please Enter Age", {
      position: "top-right",
      theme: "colored"
    });
  }
  else if(married=="")
  {
   
  toast.error("Please Enter RelationShip Status", {
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
  else if(income=="")
  {
    setError("Please Enter income")
    toast.error("Please Enter income", {
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
    <><div>
      {users && users.map((user) => (
        <Topbar user={user} />
      ))}


      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={firstStep ? 0 : secondStep ? 1 : 2}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      );


      <div className="container">
        <div className="firstStep">
        {firstStep &&
          <>
            <label style={{ backgroundColor: "#005CA9", display: "block", width: "50%" }}>Age</label><input style={{ width: "50%" }} class="form-control" type="number" placeholder="Enter Your Age" InputProps={{ disableUnderline: true }}
              value={age}
              onChange={(e) => {
                agevalidation(e);
              } } /><label class="mt-4" style={{ backgroundColor: "#005CA9", display: "block", width: "50%" }}>RelationShip Status </label><RadioGroup value={married}>
              <FormControlLabel value="married" control={<Radio checked={married.length === 0 ? false : married.includes("married") ? true : false} />} label="Married" onChange={() => setmarried("married")} />
              <FormControlLabel value="single" control={<Radio checked={married.length === 0 ? false : married.includes("single") ? true : false} />} label="Single" onChange={() => setmarried("single")} />
            </RadioGroup>
          </>}
          </div>
          <div className="secondStep">
        {secondStep &&
          <><label class="mt-4" style={{ backgroundColor: "#005CA9", display: "block", width: "50%" }}>Current Job Years</label><input style={{ width: "50%" }} class="form-control" type="number" placeholder="Enter Current Job Years"
            value={CurrentJobYears}
            onChange={(e) => {
              crjobyearsvalidation(e);
            } } />

            <label class="mt-4" style={{ backgroundColor: "#005CA9", display: "block", width: "50%" }}>Income</label>
            <input style={{ width: "50%" }} class="form-control" type="number" placeholder="Enter Your Income"
              value={income}
              onChange={(e) => {
                incmevalidation(e);
              } } />

            <label class="mt-4" style={{ backgroundColor: "#005CA9", display: "block", width: "50%" }}>Job Experience</label>
            <input style={{ width: "50%" }} class="form-control" type="number" placeholder="Enter Your Experience Years"
              value={Experience}
              onChange={(e) => {
                expvalidation(e);
              } } />


<SplitButton class="mt-4"  id="dropdown-basic-button" title={Profession} size="sm"
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

              </SplitButton>

          </>}
          </div>
          <div className="thirdStep">
        {thirdStep &&
          <>
            <label style={{ backgroundColor: "#005CA9", display: "block", width: "50%" }}>Car OwnerShip</label><RadioGroup>
              <FormControlLabel value="Yes" control={<Radio checked={CarOwnership.length === 0 ? false : CarOwnership.includes("yes") ? true : false} />} label="Yes" onChange={() => setCarOwnership("yes")} />
              <FormControlLabel value="No" control={<Radio checked={CarOwnership.length === 0 ? false : CarOwnership.includes("no") ? true : false} />} label="No" onChange={() => setCarOwnership("no")} />
            </RadioGroup>

            <label class="mt-4" style={{ backgroundColor: "#005CA9", display: "block", width: "50%" }}>Current House Years</label>
            <input style={{ width: "50%" }} class="form-control" type="number" placeholder="Enter Current House Years"
              value={CurrentHouseYears}
              onChange={(e) => {
                crhouseyearsvalidation(e);
              } } />

              <DropdownButton className="mt-4" id="dropdown-basic-button" title={HouseOwnership} size="sm"
              onSelect={(e) => HouseOwnershipval(e)}>
              <Dropdown.Item eventKey="rented">Rented</Dropdown.Item>
              <Dropdown.Item eventKey="owned">Owned</Dropdown.Item>
              <Dropdown.Item eventKey="norent_noown">Other</Dropdown.Item>
            </DropdownButton>

          </>}
          </div>
        <br />
        {secondbackButton &&
          <Button className="secondStep" variant="outline-primary" onClick={handlebackButton}>
            Back</Button>}
        {firstnextbtn &&
          <Button className="firstStep" variant="outline-primary" onClick={handleNextStep}>
            Next</Button>}
        {thirdbackButton && <Button className="thirdStep" variant="outline-primary" onClick={handlebackButtonthird}>
          Back</Button>}
        {Secondnextbtn &&
          <Button variant="outline-primary" onClick={handleNextStepsecond}>
            Next</Button>}
        {Submitbtn &&
          <Button variant="outline-primary" onClick={checkvaldiation}>
            Submit</Button>}
        {showresult &&
          <>

            <div className="resultb">
              <b style={{ backgroundColor: "#005ca9", padding: "5px", borderRadius: "10%" }}>Result</b>
              <br />
            {!result&&
              <CircularProgress style={{marginLeft: "45%"}} />
            }
              <div style={{ marginLeft: "40%" }}><b>{result}</b></div>


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