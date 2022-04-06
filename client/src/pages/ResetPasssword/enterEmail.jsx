import "./enterEmail.css";
import entereml from "../img/entereml.jpg"
import validator from 'validator'
import swal from 'sweetalert';

import React from 'react';
import userService from "../../services/UserService";

export default function EnterEmail() {
  
  const [email, setEmail] = React.useState("null");
    const handleEmail = (e) => {
      e.preventDefault();
  if(email=="")
  {
    swal({
      title: 'Oops! ',
      text: "Please enter Email",
      icon: 'error',
      button: 'ok ',
    });
  }
  else if(!validator.isEmail(email))
{
  swal({
    title: 'Oops! ',
    text: "Please enter valid Email",
    icon: 'error',
    button: 'ok ',
  });
}
  else
  {
      userService
        .forget( email )
        .then((res) => {
          console.log(email)
          swal({
            title: 'Congratulations!Email Sent SuccessFully ',
            text: "Please Check Your Email",
            icon: 'success',
            button: 'Ok',
          });
         
        })
        .catch((error) => {
          if(error.response.status==404)
          {
            swal({
              title: 'Oops! ',
              text: "Email Do not Exist",
              icon: 'error',
              button: 'ok ',
            });
          }
          else{
          swal({
            title: 'Oops! ',
            text: "Something went Wrong",
            icon: 'error',
            button: 'ok ',
          });
          console.log(error)
        }
        })
      
    }
  }
    return(
      
      
      <div className='container ' >
        <div className="div">
        <img className="entreml" src={entereml} alt="" />
        </div>
        <form>
  <div className="form-group" style={{marginTop:"10%"}} >
  <b style={{fontSize:"2rem"}}><label for="exampleInputEmail1">Reset Password</label></b>
  <div className='col-sm-3'>
    <input type="email" className="form-control" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  </div>
 
  <br/>
  <button onClick={handleEmail} class="btn btn-primary">Submit</button>
</form>
  
    </div>
 
 );
    }
