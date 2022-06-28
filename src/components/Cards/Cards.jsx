import React, { useState } from "react";
import axios from 'axios'
import "./Cards.css";
import OnlinePredictionIcon from '@mui/icons-material/OnlinePrediction';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
export default function Cards ()  {
  const [total, setTotal] = useState("");
  const [approved, setApproved] = useState("");
  const [rejected, setRejected] = useState("");

  const totalPrediction = async () => {
    await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/get/totalprediction").then((res) => {
      setTotal(res.data);
    });
  };
  const totalApproved = async() => {
    await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/get/totalApproved").then((res) => {
      setApproved(res.data);
    });
  };
  const totalRejected = async () => {
    await axios.get("https://loanpredictionfypapi.herokuapp.com/api/informations/get/totalRejected").then((res) => {
      setRejected(res.data);
    });
  };

  React.useEffect(totalPrediction, []);
  React.useEffect(totalApproved, []);
  React.useEffect(totalRejected, []);

  return (
    <>
      <div className="Cards">
        <div className="totalprediction">
          <OnlinePredictionIcon className="Icon" />
          <span className="Cardstitle">Total Predictions</span>
          <div className="opContainer">
            <span className="divspan">{total}</span>
          </div>
        </div>
        <div className="LoanApproved">
          <CheckBoxOutlinedIcon className="Icon" />
          <span className="Cardstitle">Loan Approved</span>
          <div className="opContainer">
            <span className="divspan">{approved}</span>
          </div>
        </div>
        <div className="loanrejected">
          <CloseSharpIcon className="Icon" />
          <span className="Cardstitle">Loan Rejected</span>
          <div className="opContainer">
            <span className="Rspan">{rejected}</span>
          </div>
        </div>
      </div>
    </>
  );
};
