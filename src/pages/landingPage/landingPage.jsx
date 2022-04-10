import "./landingPage.css";
import { Link } from "react-router-dom";
export default function landingPage() {
    return(
        <div className="landingPage">
        <div className="landingPageimg">
        <button className="LoginButton">
        <Link className="link" to="/login">
          Signin
        </Link>
        </button>
        <button className="RegisterButton">
        <Link className="link" to="/register">
          Signup
        </Link>
        </button>
        </div>
        </div>
    );
}