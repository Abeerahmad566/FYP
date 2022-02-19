import "./Prediction.css";
import TopBar from '../TopBar/Topbar'
import Button from 'react-bootstrap/Button'
export default function PredictionPage() {
    return(
       <div>
           <TopBar/>
      
       <div className="formdivcol1 col-sm-2">
       <label style={{backgroundColor: "#005CA9", display:"block"}} >Age</label>
       <input class="form-control" type="text" placeholder="Enter Your Age"/>
       
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Current Job Years</label>
       <input class="form-control" type="text" placeholder="Enter Current Job Years"/>
       
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Current House Years</label>
       <input class="form-control" type="text" placeholder="Enter Current House Years"/>
       </div>

       <div className="formdivcol2 col-sm-2">
       <label style={{backgroundColor: "#005CA9", display:"block"}} >Income</label>
       <input class="form-control" type="text" placeholder="Enter Your Income"/>
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Profession</label>
       <input class="form-control" type="text" placeholder="Enter Your Profession"/>
       
       <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Legal Status</label>
       <select class="form-control">
        <option>No</option>
         <option>yes</option>
        </select>
       </div>
       
            <div className="formdivcol3 col-sm-2">
           <label style={{backgroundColor: "#005CA9", display:"block"}} >Car Ownership</label>
         <select class="form-control">
            <option>No</option>
            <option>yes</option>
        </select>

        <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >House Ownership</label>
       <select class="form-control">
            <option>No</option>
             <option>yes</option>
        </select>

        <label style={{backgroundColor: "#005CA9", display:"block",marginTop:"10%"}} >Experience</label>
       <input class="form-control" type="text" placeholder="Enter Your Experience Years"/>

       </div>
       <Button className="Button" variant="primary">Make Prediction</Button>
       <div className="resultb">
           <b><span>Result   {" "} </span></b>
       </div>
       </div>
      
    );
}