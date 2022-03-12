import React from "react";
import "./Prediction.css";
import TopBar from '../TopBar/Topbar'
import infromationService from "../../services/InformationService";
import userService from "../../services/UserService";
import { FormControl,FormLabel,RadioGroup,FormControlLabel,Radio } from "@material-ui/core";
const PredictionPage = () => {
    const[age,setage]= React.useState("");
    const[CurrentJobYears,setCurrentJobYears]= React.useState("");
    const[CurrentHouseYears,setCurrentHouseYears]= React.useState("");
    const[income,setincome]= React.useState("");
    const[Profession,setProfession]= React.useState("");
    
    const[CarOwnership,setCarOwnership]= React.useState("");
    const[HouseOwnership,setHouseOwnership]= React.useState("");
    const[Experience,setExperience]= React.useState("");
    const [error, setError] = React.useState("");
  const userid = userService.getLoggedInUser()._id;

    const agevalidation=(e)=>{
      const re = /^[0-9\b]+$/;
      if(re.test(e.target.value))
      {
        setage(e.target.value)
      }
      else if(age!=""){
        setError("")
      }
    }

    const profnvalidation=(e)=>{
      const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/
     if(!rx_live.test(e.target.value))
     {
       setProfession(e.target.value)
     }
      else if(Profession!=""){
        setError("")
      }
    }

    

    const incmevalidation=(e)=>{
      const re = /^[0-9\b]+$/;
      if(re.test(e.target.value))
      {
        setincome(e.target.value)
      }
      else if(income!=""){
        setError("")
      }
    }

    const crhouseyearsvalidation=(e)=>{
      const re = /^[0-9\b]+$/;
      if(re.test(e.target.value))
      {
        setCurrentHouseYears(e.target.value)
      }
     else if(CurrentHouseYears!=""){
        setError("")
      }
    }

    const crjobyearsvalidation=(e)=>{
      const re = /^[0-9\b]+$/;
      if(re.test(e.target.value))
      {
        setCurrentJobYears(e.target.value)
      }
      else if(CurrentJobYears!=""){
        setError("")
      }
    }


    const expvalidation=(e)=>{
      const re = /^[0-9\b]+$/;
      if(re.test(e.target.value))
      {
        setExperience(e.target.value)
      }
      else if(Experience!=""){
        setError("")
      }
    }

    const checkvaldiation= ()=>  {
      if(age==""){
        setError("Please Enter Age")
      }
     else if(income==""){setError("Please Enter income")}
     else if(CarOwnership==""){setError("Please Enter CarOwnership")}
     
     else if(CurrentJobYears==""){setError("Please Enter CurrentJobYears")}
     else if(Profession==""){setError("Please Enter Profession")}
     else if(HouseOwnership==""){setError("Please Enter HouseOwnership")}
     else if(CurrentHouseYears==""){setError("Please Enter CurrentHouseYears")}
     
     else if(Experience=="")
     {
      setError("Please Enter Experience")
     }
  else{
  
    infromationService
        .addInformation(userid,age,income,CarOwnership,CurrentHouseYears,Profession,CurrentJobYears,Experience,HouseOwnership)
          .then((data) => {
            console.log(data)
            setage("")
            setincome("")
            setCarOwnership("")
            setCurrentHouseYears("")
            setCurrentJobYears("")
           
            setExperience("")
           setProfession("")
           setHouseOwnership("")
          })
          .catch((err) => {
            console.log(err);
          });
  

    }
    }
    return(
       <div>
           <TopBar/>
       <div className="formdivcol1 col-sm-2">
       <label style={{backgroundColor: "#005CA9", display:"block"}}>Age</label>
       <input class="form-control" type="number" placeholder="Enter Your Age"
       value={age}
       onChange={(e) => {
         agevalidation(e);
       } }/>
       
       
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Current Job Years</label>
       <input class="form-control" type="text" placeholder="Enter Current Job Years"
       value={CurrentJobYears}
       onChange={(e) => {
         crjobyearsvalidation(e);
       } }/>
       
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Current House Years</label>
       <input class="form-control" type="text" placeholder="Enter Current House Years"
       value={CurrentHouseYears}
       onChange={(e) => {
         crhouseyearsvalidation(e);
       } }/>
       </div>

       <div className="formdivcol2 col-sm-2">
       <label style={{backgroundColor: "#005CA9", display:"block"}} >Income</label>
       <input class="form-control" type="text" placeholder="Enter Your Income"
       value={income}
       onChange={(e) => {
         incmevalidation(e);
       } }/>
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Profession</label>
       <input class="form-control" type="text" placeholder="Enter Your Profession"
       value={Profession}
       onChange={(e) => {
         profnvalidation(e);
       } }/>
       
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Experience</label>
       <input class="form-control" type="text" placeholder="Enter Your Experience Years"
         value={Experience}
         onChange={(e) => {
           expvalidation(e);
         } }/>

           
       </div>
<div className="formdivcol3 col-sm-2">
<label style={{backgroundColor: "#005CA9", display:"block"}} >Car OwnerShip</label>
  <RadioGroup  >
    <FormControlLabel value="Yes" control={<Radio />} label="Yes" onChange={()=>setCarOwnership("Yes")} />
    <FormControlLabel value="No" control={<Radio />} label="No"  onChange={()=>setCarOwnership("No")}/>
  </RadioGroup>
  <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >House Ownership</label>
           <RadioGroup  >
    <FormControlLabel value="Yes" control={<Radio />} label="Yes" onChange={()=>setHouseOwnership("Yes")} />
    <FormControlLabel value="No" control={<Radio />} label="No"  onChange={()=>setHouseOwnership("No")}/>
  </RadioGroup>
        
       </div>
     
       <div className="error" style={{color:"red"}}>{error}</div>
      
       <button className="rgstrButton"
      
      onClick={checkvaldiation}
      >Make Prediction</button>
       <div className="resultb">
           <b style={{backgroundColor:"#005ca9"}}>Result</b>
        
       </div>

       </div>
      
    );
}
export default PredictionPage;