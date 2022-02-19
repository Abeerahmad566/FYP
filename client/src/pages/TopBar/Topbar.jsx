import "./Topbar.css";
import { Link } from "react-router-dom";
import logo from '../img/logo.png';
export default function Topbar() {
    return(
<div className="top">
      <div className="topLeft">
   
            <Link className="link" to="/">
              <img className="logo" src={logo} alt="" />
            </Link>
         
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/predictionPage">
              Predict
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
         
          <li className="topListItem" >
            Logout
          </li>
        </ul>
      </div>
     
    </div>
    );
}