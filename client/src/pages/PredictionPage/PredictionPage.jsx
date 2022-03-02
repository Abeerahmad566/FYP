import React from "react";
import "./Prediction.css";
import TopBar from '../TopBar/Topbar'
import infromationService from "../../services/InformationService";
const PredictionPage = () => {
    const[age,setage]= React.useState("");
    const[CurrentJobYears,setCurrentJobYears]= React.useState("");
    const[CurrentHouseYears,setCurrentHouseYears]= React.useState("");
    const[income,setincome]= React.useState("");
    const[Profession,setProfession]= React.useState("");
    const[LegalStatus,setLegalStatus]= React.useState("");
    const[CarOwnership,setCarOwnership]= React.useState("");
    const[HouseOwnership,setHouseOwnership]= React.useState("");
    const[Experience,setExperience]= React.useState("");
    const [error, setError] = React.useState("");
  

    const agevalidation=(e)=>{
      const agefrm = e.target.value;
      setage(agefrm);
      if(age!=""){
        setError("")
      }
    }

    const profnvalidation=(e)=>{
      const profn = e.target.value;
      setProfession(profn);
      if(Profession!=""){
        setError("")
      }
    }

    const lgstatusvalidation=(e)=>{
      const lgstatus = e.target.value;
      setLegalStatus(lgstatus);
      if(LegalStatus!=""){
        setError("")
      }
    }

    const incmevalidation=(e)=>{
      const incme = e.target.value;
      setincome(incme);
      if(income!=""){
        setError("")
      }
    }

    const crhouseyearsvalidation=(e)=>{
      const crhouseyears = e.target.value;
      setCurrentHouseYears(crhouseyears);
      if(CurrentHouseYears!=""){
        setError("")
      }
    }

    const crjobyearsvalidation=(e)=>{
      const crjobyears = e.target.value;
      setCurrentJobYears(crjobyears);
      if(CurrentJobYears!=""){
        setError("")
      }
    }

    const husownvalidation=(e)=>{
      const husown = e.target.value;
      setHouseOwnership(husown);
      if(HouseOwnership!=""){
        setError("")
      }
    }

    const carownvalidation=(e)=>{
      const carown = e.target.value;
      setCarOwnership(carown);
      if(CarOwnership!=""){
        setError("")
      }
    }

    const expvalidation=(e)=>{
      const exp = e.target.value;
      setExperience(exp);
      if(Experience!=""){
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
     else if(LegalStatus==""){setError("Please Enter LegalStatus")}
     else if(Experience=="")
     {
      setError("Please Enter Experience")
     }
  else{
    infromationService
        .addInformation(age,income,CarOwnership,CurrentHouseYears,Profession,CurrentJobYears,LegalStatus,Experience,HouseOwnership)
          .then((data) => {
            console.log(data);
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
       <input class="form-control" type="text" placeholder="Enter Your Age"
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
       
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Legal Status</label>
       <input class="form-control" type="text" placeholder="Enter YES or NO"
       value={LegalStatus}
       onChange={(e) => {
         lgstatusvalidation(e);
       } }/>
       </div>
       
            <div className="formdivcol3 col-sm-2">
           <label style={{backgroundColor: "#005CA9", display:"block"}} >Car Ownership</label>
           <input class="form-control" type="text" placeholder="Enter YES or NO"
       value={CarOwnership}
       onChange={(e) => {
        carownvalidation(e);
       } }/>

        <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >House Ownership</label>
        <input class="form-control" type="text" placeholder="Enter YES or NO"
       value={HouseOwnership}
       onChange={(e) => {
        husownvalidation(e);
       } }/>

        <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Experience</label>
       <input class="form-control" type="text" placeholder="Enter Your Experience Years"
         value={Experience}
         onChange={(e) => {
           expvalidation(e);
         } }/>

       </div>
       <div className="error" style={{color:"red"}}>{error}</div>
      
       <button className="rgstrButton"
      
      onClick={checkvaldiation}
      >Make Prediction</button>
       <div className="resultb">
           <b><span>Result</span></b>
       </div>
       </div>
      
    );
}
export default PredictionPage;