import "./User.css"
import Button from 'react-bootstrap/Button'
import userService from '../../services/UserService';
import { toast, ToastContainer } from "react-toastify";
import  useState from 'react-usestateref';
import nophoto from "../img/nophoto.jpg"
import axios from 'axios'
const User = (props)=>{
    const {user,history}=props
    const [firstname,setfirstname,FirstnameRef]=useState("")
    const [lastname,setlastname,LastnameRef]=useState("")
    const [phonenumber,setphonenumber,PhonenumberRef]=useState("")
    const [password,setpassword]=useState("")
    const [confrimpassword,setconfrimpassword]=useState("")
    const[showpasswordfld,setshowpasswordfld]=useState(false)
    const [photo,setphoto]=useState();
    const[file,setFile]=useState()
    const userid = userService.getLoggedInUser()._id;
    const [error,seterror]=useState("")
    const [stateimg, setStateimg] = useState({
      photo: "",
    });
    const imageFileSelectHandler = (e) => {
      setStateimg({
        photo: e.target.files[0],
      });
    };
    const updatepassword=()=>{
        if(password=="")
        {
            
            toast.error( "Password Field is Empty",{
                position: "top-right",
                theme:"colored"
              });
        }
        else if(confrimpassword=="")
        {
            toast.error( "Confirm Password Field is Empty",{
                position: "top-right",
                theme:"colored"
              });
        }
        else{
            seterror("")
           
        userService
            .updateUserpassword(userid,  {password})
            .then((data) => {
                toast.success( "Password Updated SuccessFully",{
                    position: "top-right",
                    theme:"colored"
                  });
                  setTimeout(function(){
                    window.location.href = '/home';
                 }, 2000);
            })
            .catch((err) => {
                toast.error( err,{
                    position: "top-right",
                    theme:"colored"
                  });
              console.log(err);
            });
    
}
}
    const updatedata =()=>{
         if(error){
            toast.error( error,{
                position: "top-right",
                theme:"colored"
              });
             
        }
        else
        {
            userService
            .updateUser(userid, { firstname,lastname,phonenumber})
            .then((data) => {
                toast.success( "Profile Updated SuccessFully",{
                    position: "top-right",
                    theme:"colored"
                  });
            })
            .catch((err) => {
              console.log(err);
            });
        }
     }
   const firstnameverification=()=>{
    const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;
      
    if(!name.test(FirstnameRef.current))
    {
        seterror("Inavlid First Name! It Must Be All Characters")
    }
    else
    {seterror("")}
   }
   const Lasttnameverification=()=>{
    const name = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/i;
      
    if(!name.test(LastnameRef.current))
    {
        seterror("Inavlid Last Name! It Must Be All Characters")
    }
    else{
        seterror("")
    }
   }
   const phoneverification=(e)=>{
       
       setphonenumber(e.target.value)
       if(phonenumber=="")
       {
           seterror("Phone Number is Empty")
       }
   else if(phonenumber.length>10||phonenumber.length<10)
    
      {
         seterror("Phone Number Must Be of 11 Digits")
      
      }
      else
      {
          seterror("")
      }
    
   }
   const checkcnfpasswordvaldiation= (e)=>  {
    const confmpass=e.target.value
    setconfrimpassword(confmpass);
    if(password != confmpass){
      seterror("Both Passwords should Match")
    }
    else{
      seterror("");
    }

  }
  const handleimgupdate=(e)=>{
    e.preventDefault();
      const formData = new FormData();
      formData.append("photo", stateimg.photo);
    userService
            .updateUserImg(userid,formData)
            .then((data) => {
                toast.success( "Image Updated SuccessFully",{
                    position: "top-right",
                    theme:"colored"
                  });
                  setTimeout(function(){
                    window.location.reload(true);
                 }, 2000);
            })
            .catch((err) => {
              console.log(err);
            });
        }
  
    return(
        <div className="main">
            <div className="row">
                <div className="col-sm">
                  <img style={{borderRadius:"150px",width:"300px",height:"300px",marginLeft:"10%",marginTop:"-75%"}}src={user.photo? "http://localhost:4000/"+user.photo:nophoto}></img>
                  
                <label htmlFor="fileInput">
            <i  className="imguploadlogo fas fa-plus fa-4x"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none"}}
            onChange={imageFileSelectHandler}
          />
       <Button variant="outline-info" size="sm" className="uploadbtn" onClick={handleimgupdate}>Upload Image</Button>
                </div>
               <div className="col2 col-sm">
            {!showpasswordfld &&
            <>
            <label
            style={{paddingRight:"42px"}}>
               <b>Change First Name</b>
            </label>
            <input
            type="text"
             placeholder={user.firstname}
            onChange={(e) => {
                setfirstname(e.target.value);
                 firstnameverification();
              } }/>
              <br/>
              <label
              style={{paddingRight:"44px"}}>
               <b>Change Last Name</b>
            </label>
            <input
            type="text"
             placeholder={user.lastname}
            onChange={(e) => {
                setlastname(e.target.value);
                Lasttnameverification();
              } }/>
                <br/>
              <label
              style={{paddingRight:"10px"}}>
              <b> Change Phone Number</b>
            </label>
            <input
            type="number"
            placeholder={user.phonenumber}
            onChange={(e) => {
                
                phoneverification(e);
              } }/>
              
               
              </>
            }
            {showpasswordfld &&
<>
             <label
             style={{paddingRight:"12px"}}>
              <b> Change Password</b>
            </label>
            <input
            type="password"
            value={password}
            onChange={(e) => {
                setpassword(e.target.value);
              } }/>
                  <br/>
                  <label     
                  style={{paddingRight:"10px"}}>
               <b>Confirm Password</b>
            </label>
            <input
        type="password"
            value={confrimpassword}
            onChange={(e)=>checkcnfpasswordvaldiation (e)}/>
              </>
            }
                  <br/>
                  {!showpasswordfld && <Button style={{marginRight:"40px"}}  variant="primary"onClick={updatedata}>Update Profile</Button>}
                  {!showpasswordfld && <Button variant="primary" onClick={()=>{setshowpasswordfld(true)}}>Update Password</Button>}
               
                 {showpasswordfld && 
                 <><Button variant="primary"
                    style={{ marginRight: "5%", marginLeft: "5%" }}
                    onClick={() => {
                        setshowpasswordfld(false);
                        console.log(showpasswordfld);
                    } }
                >Back</Button>
                        <Button onClick={() => {
                            updatepassword();
                        } } variant="primary">Change Password</Button>
                  {error}
                    </>
                    
                  }
             
                   
                  <ToastContainer/>
        </div>
        </div>
          </div>
    );
}
export default User;