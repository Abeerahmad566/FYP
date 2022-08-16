import { useState,useEffect } from "react";
import userService from "../../services/UserService";
import TopBar from "../TopBar/Topbar";
import User from "../User/User"
import "./profile.css"
const Profile = ()=>{
    const [userid,setuserid]=useState(userService.getLoggedInUser()._id)
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
    return(
        <div className='main'>
     <TopBar user={users}/>
<div className="profile">
    <div className="headerprofile">
   
        <b>Your Profile</b>
</div>
</div>
<div className="profilefields">
    

            <User user={users} />
        
</div>
</div>
    );
}
export default Profile;