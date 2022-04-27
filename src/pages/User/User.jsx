import "./User.css"
import Button from 'react-bootstrap/Button'
import userService from '../../services/UserService';
import { toast, ToastContainer } from "react-toastify";
import  useState from 'react-usestateref';
const User = (props)=>{
    const {user,history}=props
    const [firstname,setfirstname,FirstnameRef]=useState("")
    const [lastname,setlastname,LastnameRef]=useState("")
    const [phonenumber,setphonenumber,PhonenumberRef]=useState("")
    const [password,setpassword]=useState("")
    const [confrimpassword,setconfrimpassword]=useState("")
    const[showpasswordfld,setshowpasswordfld]=useState(false)
    const userid = userService.getLoggedInUser()._id;
    const [error,seterror]=useState("")

    // const [ setUser] = useState({});
    // const handleChange = ({target}) => {
    //     const {name, value} = target;
    //     console.log(name)
    //     console.log(value)
    //     setfirstname(value);
    //     console.log(firstname);
        
    // };


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
    return(
        <div className="main">
             
            {!showpasswordfld &&
            <>
            <label
            style={{paddingRight:"42px"}}>
               <b>Change First Name</b>
            </label>
            {/* <input type="text" name='firstname' value={user.firstname}
                                   onChange={(e) => setfirstname(e.target.value)} className="form-control" id="firstname"/> */}
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
                    style={{ marginRight: "15%", marginLeft: "5%" }}
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

    );
}
export default User;