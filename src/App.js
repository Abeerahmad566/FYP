import Home from "./pages/Home/Home";
import Auth from "../src/components/Auth";
import PredictionPage from "./pages/PredictionPage/PredictionPage"
import LandingPage from "./pages/landingPage/landingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register"
import Contact from "./pages/Contact/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Enteremail from "./pages/ResetPasssword/enterEmail"
import ResetPassword from "./pages/ResetPasssword/NewPassword"
import { ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile/Profile";
function App() {
 
  return (
    <Router>
      <ToastContainer  theme= "colored"  />
      <Switch>
      
      <Route path="/register">{ <Register />}</Route>
        <Route path="/login">{ <Login />}</Route>
        <Route path ="/enteremail">{<Enteremail/>}</Route>
        <Route path="/passwordreset/:resetToken">{<ResetPassword/>}</Route>
        <Route exact path="/">
        <LandingPage/>
        </Route>
        <Auth>
         <Route path="/contact">{<Contact/>}</Route> 
         <Route path="/predictionPage">{<PredictionPage/>}</Route>
      <Route path="/home">{<Home/>}</Route>
      <Route path ="/profile">{<Profile/>}</Route>
      </Auth>
        
    
     
       
       
      </Switch>
    </Router>
  );
}

export default App;
