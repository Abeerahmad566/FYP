import Home from "./pages/Home/Home";
import Auth from "../src/components/Auth";
import Admin from "../src/components/Admin";
import LandingPage from "./pages/landingPage/landingPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Enteremail from "./pages/ResetPasssword/enterEmail";
import NewPassword from "./pages/ResetPasssword/NewPassword";
import { ToastContainer } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./pages/profile/Profile";
import Multistep from "./pages/PredictionPage/Multistep";
import "./App.css";
import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar";
import AdminRegister from "./pages/adminRegister/AdminRegister";
import PendingLoans from "./pages/PendingLoans/PendingLoans";
import AllLoans from "./pages/AllLoans/AllLoans";
import ManageUsers from "./pages/ManageUsers/ManageUsers";
import ManageAdmins from "./pages/ManageAdmins/ManageAdmin";
import ApplicantDocuments from "./pages/ApplicantDocuments/ApplicantDocuments";
import Emailverify from "./pages/Emailverify";
import Emailverifylogin from "./pages/Emailverifylogin";
import Navigation from "./components/Navigation/Navigation";
import userService from "./services/UserService";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";
import About from "./components/AboutUs/About";
import GetinTouch from "./components/GetinTouch/GetinTouch";
function App() {
  const user = userService.isLoggedIn();
  return (
    <Router>
      <ToastContainer theme="colored" />
      <Switch>
        <Route path="/:id/emailverify/:token">{<Emailverify />}</Route>
        <Route path="/:id/emailverifylogin/:token">
          {<Emailverifylogin />}
        </Route>
        <Route path="/newpassword/:id/:token">{<NewPassword />}</Route>
        <Route path="/register">{<Register />}</Route>
        <Route path="/login">{<Login />}</Route>
        <Route path="/enteremail">{<Enteremail />}</Route>
        <Route path="/contact">{<Contact />}</Route>
        <Route exact path="/">
          <Navigation />
          <LandingPage />
          <Features />
          <Team />
          <About />
          <GetinTouch />
        </Route>
        <Auth>
          <Route path="/predictionPage">
            {user ? <Multistep /> : <LandingPage />}
          </Route>
          <Route path="/home">{user ? <Home /> : <LandingPage />}</Route>
          <Route path="/profile">{user ? <Profile /> : <LandingPage />}</Route>

          <Route path="/adminpanel">
            {user ? (
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <MainDash />
                </div>
              </div>
            ) : (
              <LandingPage />
            )}
          </Route>
          <Route path="/adminregister">
            {user ? <AdminRegister /> : <LandingPage />}
          </Route>
          <Route path="/pendingloans">
            {user ? <PendingLoans /> : <LandingPage />}
          </Route>
          <Route path="/allloans">
            {user ? <AllLoans /> : <LandingPage />}
          </Route>
          <Route path="/manageusers">
            {user ? <ManageUsers /> : <LandingPage />}
          </Route>
          <Route path="/manageadmins">
            {user ? <ManageAdmins /> : <LandingPage />}
          </Route>
          <Route path="/applicantdocuments/:id">
            {user ? <ApplicantDocuments /> : <LandingPage />}
          </Route>
        </Auth>
      </Switch>
    </Router>
  );
}

export default App;
