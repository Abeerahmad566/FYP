import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import "./enterEmail.css";
import entereml from "../img/entereml.jpg"
export default function enterEmail() {
  const handleSubmit = async (e) => {
      e.preventDefault();
      alert("check");
     
    };
    return(
      <div className='container'>
        <img className="entreml" src={entereml} alt="" />
        <Form style={{marginTop:"-25%"}} >
      <span className='enteremailspan'><b>Reset Password</b></span><br/>
      <div className=" col-sm-3">
       <input class="form-control" type="email" placeholder="Enter Your Email"/>
       </div>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
 <br/>
  <Button onClick={handleSubmit}  variant="primary">Submit</Button>
  </Form>
  
    </div>);
}