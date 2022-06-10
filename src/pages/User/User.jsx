import "./User.css"
import Button from 'react-bootstrap/Button'
import userService from '../../services/UserService';
import { toast, ToastContainer } from "react-toastify";
import  useState from 'react-usestateref';
import nophoto from "../img/nophoto.jpg"
import axios from 'axios'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons'
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
    const[IsEnabled , setIsEnabled] = useState(true)
    const [stateimg, setStateimg] = useState({
      photo: "",
    });
    const imageFileSelectHandler = (e) => {
      setStateimg({
        photo: e.target.files[0],
        
      });
      setIsEnabled(false)
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
            .then(() => {
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
            <div className="centerdiv">
               
                  <img className="changeimg" src={user.photo? "http://localhost:4000/"+user.photo:nophoto}></img>
                  <br/>
                
                <label htmlFor="fileInput" >
                <div className="icon"><FontAwesomeIcon   icon={faArrowUpFromBracket} className="faicon fa-2x" /></div>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none"}}
            onChange={imageFileSelectHandler}
          />
          
       <Button disabled = {IsEnabled} variant="outline-info"  className="uploadbtn" onClick={handleimgupdate}>Change Image</Button>
                
            {!showpasswordfld &&
            <>
            <br/>
            <label className="mt-4 changefirstname"
             style={{paddingRight:"45px"}}>
               <b >Change First Name</b>
            </label>
            <input
            className="changefirstnamefield"
            type="text"
             placeholder={user.firstname}
            onChange={(e) => {
                setfirstname(e.target.value);
                 firstnameverification();
              } }/>
              <br/>
              <label
              className="mt-3 changelastname"
                style={{paddingRight:"45px"}}>
               <b>Change Last Name</b>
            </label>
            <input
            className="changelastnamefield"
            type="text"
             placeholder={user.lastname}
            onChange={(e) => {
                setlastname(e.target.value);
                Lasttnameverification();
              } }/>
                <br/>
              <label
              className="mt-3 changephonenumber"
              
              style={{paddingRight:"10px"}}>
              <b> Change Phone Number</b>
            </label>
            <input
            className="changephonenumberfield"
            type="number"
            placeholder={user.phonenumber}
            onChange={(e) => {
                
                phoneverification(e);
              } }/>
              
               
              </>
            }
            {showpasswordfld &&
<> <br/>
             <label
             className="mt-4 changepassword"
           
             style={{paddingRight:"13px"}}>
              <b> Change Password</b>
            </label>
            <input
              className="passwordfield"
            type="password"
            value={password}
            onChange={(e) => {
                setpassword(e.target.value);
              } }/>
                  <br/>
                  <label   
                  className="mt-3 confrimpassword"  
                  style={{paddingRight:"10px"}}>
               <b>Confirm Password</b>
            </label>
            <input
            className="confrimpasswordfield"
        type="password"
            value={confrimpassword}
            onChange={(e)=>checkcnfpasswordvaldiation (e)}/>
              </>
            }
                  <br/>
                  {!showpasswordfld && <Button style={{marginRight:"40px"}} className="updateprofile"  variant="outline-info"onClick={updatedata}>Update Profile</Button>}
                  {!showpasswordfld && <Button variant="outline-info" className="updatepassword"onClick={()=>{setshowpasswordfld(true)}}>Update Password</Button>}
               
                 {showpasswordfld && 
                 <><Button variant="outline-info"
                
                 className="backbtn"
                    
                    onClick={() => {
                        setshowpasswordfld(false);
                        console.log(showpasswordfld);
                    } }
                >Back</Button>
                        <Button
                      className="changepasswordbtn"
                        onClick={() => {
                            updatepassword();
                        } } variant="outline-info"
                        >Change Password</Button>
                  {error}
                    </>
                    
                  }
             
                   
                  <ToastContainer/>
        </div>
        </div>
          
    );
}
export default User;