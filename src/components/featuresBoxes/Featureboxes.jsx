import React, { useState } from "react";
import axios from 'axios'
import "./featureboxes.css";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
const Featureboxes = () => {
  const [total, setTotal] = useState("");
  const [approved, setApproved] = useState("");
  const [rejected, setRejected] = useState("");

  //Get All Users
  const totalPrediction = async () => {
    await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/get/totalprediction").then((res) => {
      setTotal(res.data);
    });
  };
  React.useEffect(totalPrediction, []);

  //Get All Orders Count
  const totalApproved = async() => {
    await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/get/totalApproved").then((res) => {
      setApproved(res.data);
    });
  };
  React.useEffect(totalApproved, []);

  //Get All Revenue

  const totalRejected = async () => {
    await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/get/totalRejected").then((res) => {
      setRejected(res.data);
    });
  };
  React.useEffect(totalRejected, []);

  return (
    <>
      <div className="featured">
        <div className="featuredItem_1">
          <OnlinePredictionIcon className="TotUserIcon" />
          <span className="featuredTitle">Total Predictions</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{total}</span>
          </div>
        </div>
        <div className="featuredItem_2">
          <CheckBoxOutlinedIcon className="TotUserIcon" />
          <span className="featuredTitle">Loan Approved</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{approved}</span>
          </div>
        </div>
        <div className="featuredItem_3">
          <CloseSharpIcon className="TotUserIcon" />
          <span className="featuredTitle">Loan Rejected</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoneyR">{rejected}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featureboxes;
