import "./enterEmail.css";
import entereml from "../img/entereml.jpg"
import { useRef, useState } from 'react';
import axios from "axios";
import {toast} from "react-toastify"
import NewPassword from "./NewPassword";
export default function EnterEmail() {
  const emailref = useRef();
  const [message,setmessage]= useState("")
  const [form,setform]=useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(emailref.current.value ==""){
      setmessage("Email field is empty")
} 
else if(!regex.test(emailref.current.value))
{
  setmessage("Enter Valid Email")
}
else{
    try{
      let url = "http://localhost:4000/api/users/email-send"
      let options ={
        method:"POST",
        url:url,
        data:{email:emailref.current.value}
      }
      let response = await axios(options)
      let record = response.data;
      if(record.statusText=='Success')
      {
        setmessage(record.message)
        // toast.sucess(record.message);
        setform(false);
      }
      else{
        setmessage(record.message)
        toast.error(record.message)
      }
    }
    catch(e)
    {
      
      toast.error("Something went wrong")
    }
    }
  }
    return(
      <div>
      {form ?
      <div className='container ' >
        <div className="div">
        <img className="entreml" src={entereml} alt="" />
        </div>
        <form>
  <div class="form-group" style={{marginTop:"10%"}} >
  <b style={{fontSize:"2rem"}}><label for="exampleInputEmail1">Reset Password</label></b>
  <div className='col-sm-3'>
    <input type="email" class="form-control" placeholder="Enter email" ref={emailref}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  </div>
  {message}
  <br/>
  <button onClick={handleSubmit} class="btn btn-primary">Submit</button>
</form>
  
    </div>
  : <NewPassword email={emailref.current.value}/>}
  </div>);
}