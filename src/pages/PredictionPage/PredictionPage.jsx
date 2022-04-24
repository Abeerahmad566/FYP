import React from "react";
import axios from "axios";
import "./Prediction.css";
import TopBar from '../TopBar/Topbar'
import infromationService from "../../services/InformationService";
import userService from "../../services/UserService";
import {RadioGroup,FormControlLabel,Radio } from "@material-ui/core";
import { DropdownButton ,Dropdown} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import  useState from 'react-usestateref';
const PredictionPage = () => {
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
  const userid = userService.getLoggedInUser()._id;
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
     else if(CarOwnership==""){setError("Please Enter CarOwnership")}
     else if(married==""){setError("Please Enter RelationShip Status")}
     else if(CurrentJobYears==""){setError("Please Enter CurrentJobYears")}
     else if(Profession=="Select Profession"){setError("Please Select Profession")}
     else if(HouseOwnership=="Select House OwnerShip"){setError("Please Select HouseOwnership")}
     else if(CurrentHouseYears==""){setError("Please Enter CurrentHouseYears")}
     else if(Experience=="")
     {
      setError("Please Enter Experience")
     }
  else{
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
    return(
       <div>
         
           <TopBar/>
           <div class="container">
  <div class="row mt-5">
    
    <div className=" col-sm">
              <label style={{backgroundColor: "#005CA9", display:"block",width:"50%"}}>Age</label>
               <input style={{width:"50%"}} class="form-control" type="number" placeholder="Enter Your Age" InputProps={{ disableUnderline: true }}
                value={age}
                onChange={(e) => {
                  agevalidation(e);
                } }/>
       
       
                <label class="mt-4" style={{backgroundColor: "#005CA9", display:"block",width:"50%"}} >Current Job Years</label>
                <input style={{width:"50%"}} class="form-control" type="number" placeholder="Enter Current Job Years"
                value={CurrentJobYears}
                onChange={(e) => {
                  crjobyearsvalidation(e);
                } }/>
                
                <label class="mt-4" style={{backgroundColor: "#005CA9", display:"block",width:"50%"}} >Current House Years</label>
                <input style={{width:"50%"}} class="form-control" type="number" placeholder="Enter Current House Years"
                value={CurrentHouseYears}
                onChange={(e) => {
                  crhouseyearsvalidation(e);
                } }/>
              
    </div>
    
    <div className="col-sm">
       <label style={{backgroundColor: "#005CA9", display:"block",width:"50%"}} >Income</label>
       <input style={{width:"50%"}} class="form-control" type="number" placeholder="Enter Your Income"
       value={income}
       onChange={(e) => {
         incmevalidation(e);
       } }/>
       

       <label class="mt-4" style={{backgroundColor: "#005CA9", display:"block",width:"50%"}} >Experience</label>
       <input style={{width:"50%"}} class="form-control" type="number" placeholder="Enter Your Experience Years"
         value={Experience}
         onChange={(e) => {
           expvalidation(e);
         } }/>

<label class="mt-4" style={{backgroundColor: "#005CA9", display:"block",width:"50%"}} >RelationShip Status </label>
  <RadioGroup value={married}>
  <FormControlLabel value="married"  control={<Radio checked={married.length===0?false: married.includes("married")?true:false} />} label="Married" onChange={()=>setmarried("married")} />
  <FormControlLabel value="single"  control={<Radio checked={married.length===0?false:married.includes("single")?true:false} />} label="Single"  onChange={()=>setmarried("single")}/>
</RadioGroup>   
    </div>

  </div>
<div className="row">
<div className=" col-sm">
<label style={{backgroundColor: "#005CA9", display:"block",width:"50%"}} >House Ownership</label>
<DropdownButton id="dropdown-basic-button" title={HouseOwnership} size="sm" 
     onSelect={(e)=>HouseOwnershipval(e)}>
<Dropdown.Item eventKey="rented" >Rented</Dropdown.Item>
<Dropdown.Item eventKey="owned">Owned</Dropdown.Item>
<Dropdown.Item eventKey="norent_noown">Other</Dropdown.Item>
</DropdownButton>  
  </div>
  <div className="col-sm">
<label style={{backgroundColor: "#005CA9", display:"block",width:"50%"}} >Car OwnerShip</label>
<RadioGroup  >
  <FormControlLabel value="Yes" control={<Radio checked={CarOwnership.length===0?false: CarOwnership.includes("yes")?true:false} />} label="Yes" onChange={()=>setCarOwnership("yes")} />
  <FormControlLabel value="No" control={<Radio checked={CarOwnership.length===0?false: CarOwnership.includes("no")?true:false} />} label="No"  onChange={()=>setCarOwnership("no")}/>
</RadioGroup>
  </div>
  <div className="row">
  <div className="col-sm">
  <label class="prof" style={{backgroundColor: "#005CA9", display:"block"}} >Profession</label>
     <DropdownButton id="dropdown-basic-button" title={Profession} size="sm" 
     drop={"up"}
     onSelect={(e)=>profnvalidation(e)}>
<Dropdown.Item eventKey="Mechanical_engineer" >Mechanical Engineer</Dropdown.Item>
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
<Dropdown.Item eventKey="Biomedical_Engineer">Biomedical_Engineer</Dropdown.Item>

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
<Dropdown.Item eventKey="Civil_engineer">Civil_engineer</Dropdown.Item>
<Dropdown.Item eventKey="Scientist">Scientist</Dropdown.Item>

<Dropdown.Item eventKey="Industrial_Engineer">Industrial Engineer</Dropdown.Item>
<Dropdown.Item eventKey="Technology_specialist">Technology Specialist</Dropdown.Item>

</DropdownButton>
  </div>
</div>
</div>
<div className="error" style={{color:"red"}}>{error}</div>
      
      <button className="rgstrButton"
     
     onClick={checkvaldiation}
     >Make Prediction</button>
      <div className="resultb" >
          <b style={{backgroundColor:"#005ca9",padding:"5px",borderRadius:"10%"}}>Result</b>
          <br/>
          <div style={{marginLeft:"40%"}}><b>{result}</b></div>

      </div>
</div>
          
       

      

     
      <Footer/>

       </div>
      
    );
}
export default PredictionPage;