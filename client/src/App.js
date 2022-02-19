import Home from "./pages/Home/Home";
import PredictionPage from "./pages/PredictionPage/PredictionPage"
import LandingPage from "./pages/landingPage/landingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/Contact/Contact"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
 
  return (
    <Router>
     
      <Switch>
        <Route exact path="/">
        <Register/>
        </Route>
         <Route path="/contact">{<Contact/>}</Route> 
         <Route path="/predictionPage">{<PredictionPage/>}</Route>
      <Route path="/landingPage">{<LandingPage/>}</Route>
        <Route path="/register">{ <Register />}</Route>
        <Route path="/login">{ <Login />}</Route>
     
       
       
      </Switch>
    </Router>
  );
}

export default App;
