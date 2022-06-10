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
import ResetPassword from "./pages/ResetPasssword/NewPassword";
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
function App() {
  return (
    <Router>
      <ToastContainer theme="colored" />
      <Switch>
        <Route path="/register">{<Register />}</Route>
        <Route path="/login">{<Login />}</Route>
        <Route path="/enteremail">{<Enteremail />}</Route>
        <Route path="/passwordreset/:resetToken">{<ResetPassword />}</Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Auth>
          <Route path="/contact">{<Contact />}</Route>
          <Route path="/predictionPage">{<Multistep />}</Route>
          <Route path="/home">{<Home />}</Route>
          <Route path="/profile">{<Profile />}</Route>

          <Route path="/adminpanel">
            {
              <div className="App">
                <div className="AppGlass">
                  <Sidebar />
                  <MainDash />
                </div>
              </div>
            }
          </Route>
          <Route path="/adminregister">
            <AdminRegister />
          </Route>
          <Route path="/pendingloans">
            <PendingLoans />
          </Route>
          <Route path="/allloans">{<AllLoans />}</Route>
          <Route path="/manageusers">{<ManageUsers />}</Route>
          <Route path="/manageadmins">{<ManageAdmins />}</Route>
          <Route path="/applicantdocuments">{<ApplicantDocuments />}</Route>
        </Auth>
      </Switch>
    </Router>
  );
}

export default App;
