import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import userService from '../../services/UserService';

const User = (props)=>{
    const {user,history}=props

    const [firstname,setfirstname]=useState("")
    const [lastname,setlastname]=useState("")
    const [phonenumber,setphonenumber]=useState("")
    const [password,setpassword]=useState("")
    const [confrimpassword,setconfrimpassword]=useState("")
    const[showpassword,setshowpassword]=useState(false)
    const userid = userService.getLoggedInUser()._id;
    // const setdata =()=>{
    //     setfirstname(user.firstname)
    // }
    // useEffect(setdata,[]);
    return(
        <div className="main">
            {!showpassword &&
            <>
            <label
            style={{paddingRight:"42px"}}>
               Change First Name
            </label>
            <input
            value={firstname}
            onChange={(e) => {
                setfirstname(e.target.value);
              } }/>
              <br/>
              <label
              style={{paddingRight:"42px"}}>
               Change Last Name
            </label>
            <input
            value={lastname}
            onChange={(e) => {
                setlastname(e.target.value);
              } }/>
                <br/>
              <label
              style={{paddingRight:"10px"}}>
               Change Phone Number
            </label>
            <input
            value={phonenumber}
            onChange={(e) => {
                setphonenumber(e.target.value);
              } }/>
              </>
            }
            {showpassword &&
<>
             <label
             style={{paddingRight:"10px"}}>
               Change Password
            </label>
            <input
            value={password}
            onChange={(e) => {
                setpassword(e.target.value);
              } }/>
                  <br/>
                  <label     
                  style={{paddingRight:"10px"}}>
               Confirm Password
            </label>
            <input
        
            value={confrimpassword}
            onChange={(e) => {
                setconfrimpassword(e.target.value);
              } }/>
              </>
            }
                  <br/>
                  <Button  variant="primary"onClick={(e) => {
              userService
                .updateUser(userid, { firstname,lastname,phonenumber,password})
                .then((data) => {
                 
                })
                .catch((err) => {
                  console.log(err);
                });
            }}>Update Profile</Button>
                  {!showpassword &&  <Button onClick={()=>{setshowpassword(true)} } variant="primary">Change Password</Button>}
                   

        </div>

    );
}
export default User;