import Home from "./pages/Home/Home";
import TopBar from "./pages/TopBar/Topbar";
import LandingPage from "./pages/landingPage/landingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
 
  return (
    <Router>
     
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/register">{ <Register />}</Route>
        <Route path="/login">{ <Login />}</Route>
     
       
       
      </Switch>
    </Router>
  );
}

export default App;
