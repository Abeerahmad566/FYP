import "./enterEmail.css";
import entereml from "../img/entereml.jpg"

import swal from 'sweetalert';

import React from 'react';

import userService from "../../services/UserService";
export default function EnterEmail() {
  const [email, setEmail] = React.useState('');

  const Forget = (props) => {
    const handleEmail = (e) => {
      e.preventDefault();
  
      userService
        .forget( email )
        .then((res) => {
          swal({
            title: 'Congratulations!',
            text: res.data.message,
            icon: 'success',
            button: 'Check Email ',
          });
          console.log(res.data.message);
        })
        .catch((error) => {
          swal({
            title: 'Oops!',
            text: error.response.data,
            icon: 'error',
            button: 'ok ',
          });
        })
    }}
    return(
      
      
      <div className='container ' >
        <div className="div">
        <img className="entreml" src={entereml} alt="" />
        </div>
        <form>
  <div className="form-group" style={{marginTop:"10%"}} >
  <b style={{fontSize:"2rem"}}><label for="exampleInputEmail1">Reset Password</label></b>
  <div className='col-sm-3'>
    <input type="email" className="form-control" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  </div>
 
  <br/>
  <button onClick={Forget} class="btn btn-primary">Submit</button>
</form>
  
    </div>
 
 );
    }
