import "./GetinTouch.css"
import { useState } from "react";
import emailjs from "emailjs-com";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Footer from "../Footer/Footer"
import {useEffect} from 'react'
const initialState = {
    name: '',
    email: '',
    message: '',
    subject:'',
  }
export default function GetinTouch() {
    const [{ name, email,subject, message }, setState] = useState(initialState)

    const handleChange = (e) => {
      const { name, value } = e.target
      setState((prevState) => ({ ...prevState, [name]: value }))
    }
    const clearState = () => setState({ ...initialState })
     
    useEffect(()=>{
        Aos.init({ duration:2000});
           },[])
    function sendemail(e){
        e.preventDefault();

        emailjs.sendForm('service_yu07tcm', 'template_fkuiy2f', e.target, 'user_f2MRZnK0Xrjl2aRCp0ku2')
            .then((result) => {
                console.log(result.text);
                clearState();
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    return(
        <div  id='contact'>
        <div data-aos="zoom-in">
<div data-aos="zoom-in-up">
  
<div className="getinTouch">
<div className="gitline"></div>
    <h1>Get in Touch</h1>
 
    <p className="gitp">Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>

<div className="form ">
            <form  onSubmit={sendemail}>
                        <div className="col-sm-15 form-group ">
                            <input type="text" className="form-control" placeholder="Name" name="name" required
                        onChange={handleChange}/>
                        </div>
                        <div className="col-sm-15  form-group pt-2 ">
                            <input type="email" className="form-control" placeholder="Email Address" name="email" required
                        onChange={handleChange}/>
                        </div>
                        <div className="col-sm-15  form-group pt-2 ">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required
                        onChange={handleChange}/>
                        </div>
                        <div className="col-sm-15  form-group pt-2 ">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"  required
                        onChange={handleChange}></textarea>
                        </div>
                        <div className="col-sm-15  pt-3 ">
                            <input type="submit" className="gitbtn" value="Send Message"></input>
                        </div>
                   
                </form>
            </div>
            </div>
            <Footer/>
            </div>
    </div>
    </div>

    );
}