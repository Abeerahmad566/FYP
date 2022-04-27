import { useState,useEffect } from "react";
import userService from "../../services/UserService";
import Topbar from "../TopBar/Topbar";
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
                })
                .catch((err) => {
                  console.log(err);
                 
                });
 }
useEffect(getdata, []);
    return(
        <>
        <Topbar/>
<div className="profile">
    <div className="headerprofile">
        <b>Edit Your Profile</b>
</div>
</div>
<div className="profilefields">
    
{users && users.map((user)=>(
            <User user={user} />
         ))}
</div>
</>
    );
}
export default Profile;