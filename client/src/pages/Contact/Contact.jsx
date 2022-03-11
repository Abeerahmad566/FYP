import "./Contact.css"
import TopBar from "../TopBar/Topbar"
import emailjs from "emailjs-com";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGooglePlusG, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { Link } from "react-router-dom";
export default function PredictionPage() {
    function sendemail(e){
        e.preventDefault();

        emailjs.sendForm('service_yu07tcm', 'template_fkuiy2f', e.target, 'user_f2MRZnK0Xrjl2aRCp0ku2')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }
    return(<div>
<TopBar/>
<div >
    <b className="ContactSize">Contact</b>
    <hr></hr>
    <span className="spanpara1">We'd love to help! </span>
    <p className="para1">Feel Free to Leave us a Message!</p>
</div>
<div className="form">
            <form  onSubmit={sendemail}>
                        <div className="col-sm-4 form-group ">
                            <input type="text" className="form-control" placeholder="Name" name="name"/>
                        </div>
                        <div className="col-sm-4  form-group pt-2 ">
                            <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                        </div>
                        <div className="col-sm-4  form-group pt-2 ">
                            <input type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <div className="col-sm-4  form-group pt-2 ">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
                        </div>
                        <div className="col-sm-4  pt-3 ">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                   
                </form>
            </div>
            <div className="col1">
                <FontAwesomeIcon icon={faEnvelope}/>
                <p className="pcontact">abeerahmad389@gmail.com</p>
            </div>
            <div className="col2">
                <FontAwesomeIcon icon={faPhone}/>
                <p className="pcontact">+923414180005</p>
            </div>
            <hr className="hrline"></hr>
            <div className="col2">
            <Link to={{ pathname: "https://www.facebook.com" }} target="_blank" >
            <FontAwesomeIcon className="facebook" icon={faFacebook} />
        </Link>
        <Link to={{ pathname: "https://www.twitter.com" }} target="_blank" >
        <FontAwesomeIcon className="ml" icon={faTwitter} />
        </Link>
        <Link to={{ pathname: "https://plus.google.com/" }} target="_blank" >
        <FontAwesomeIcon className="ml" icon={faGooglePlusG} />
        </Link>
        <Link to={{ pathname: "https://www.linkedin.com/" }} target="_blank" >
        <FontAwesomeIcon className="ml" icon={faLinkedin} />
        </Link>
            </div>
    </div>);
}