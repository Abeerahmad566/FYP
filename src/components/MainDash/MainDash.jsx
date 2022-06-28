import React from "react";
import Admin from "../Admin";
import Graph from "../Graph/Graph";
import "./MainDash.css";
const MainDash = () => {
  return (
    <>
    <Admin>
    <div className="MainDash">
      <h1>Admin Dashboard</h1>
      <Graph />
    </div>
    </Admin>
    </>
  );
};

export default MainDash;
