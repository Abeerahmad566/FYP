import "./Features.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from 'react'
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Features (){
    useEffect(()=>{
        Aos.init({ duration:2000});
           },[])
    return(
        <div id ="features">
<div data-aos="zoom-in">
<div data-aos="zoom-in-up">
        <div className="features" >
        <h2>Features</h2>
            <div className="row colwrapper">
                <div className="col-sm">
                <PersonOutlineOutlinedIcon className="ficon"></PersonOutlineOutlinedIcon>
                <h4>User</h4>
                <li>
                    Make Predictions
                </li>
                <li>
                    Can see his Previous Predictions
                </li>
                <li>
                    Can delete his predictions
                </li>
                </div>
                <div className="col-sm">
                    <SupervisorAccountOutlinedIcon className="ficon"></SupervisorAccountOutlinedIcon>
                    <h4>Admin</h4>
                    <li>
                    Make Predictions
                </li>
                <li>
                    Can see all the loans prediction
                </li>
                <li>
                    Can Approved or Reject Loan based on Documents
                </li>
                </div>
                <div className="col-sm">
                    <AdminPanelSettingsOutlinedIcon className="ficon"></AdminPanelSettingsOutlinedIcon>
                    <h4 className="sa">Super Admin</h4>
                    <li>Make Predictions </li>
                <li>Can see all the loans prediction</li>
                <li>Can delete any of the loans prediction</li>
                <li>Can Approved or Reject Loan based on Documents</li>
                <li>Can Manage Users</li>
                <li>Can Manage Admins</li>
                <li>Can Register a Admin</li>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}