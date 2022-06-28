import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./Footer.css"
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGooglePlusG, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons"
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
const Footer = () => {
   return(

        <MDBFooter  className="font-small footer">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 >Contact us</h5>
                <FontAwesomeIcon icon={faEnvelope}/>
                <p >abeerahmad389@gmail.com</p>
         
                <FontAwesomeIcon icon={faPhone}/>
                <p >+923414180005</p>
       
           
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Connect with us</h5>
               
                   
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
                
                  
                
              
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href=""> Loan Prediction </a>
            </MDBContainer>
          </div>
        </MDBFooter>
     
    
    
   );
  }
  
  export default Footer;