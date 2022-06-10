import "./landingPage.css";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
export default function landingPage() {
    return(
        <div className="landingPage">
        <div className="landingPageimg">
        <button className="LoginButton">
        <Link className="link" to="/login">
         <b> Log in</b>
        </Link>
        </button>
        <button className="RegisterButton">
        <Link className="link" to="/register">
          <b>Register</b>
        </Link>
        </button>
        </div>
        <Footer/>
        </div>
    );
}