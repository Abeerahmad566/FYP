import React from "react";
import Admin from "../Admin";
import Table from "../Table/Table";
import "./MainDash.css";
const MainDash = () => {
  return (
    <>
    <Admin>
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Table />
    </div>
    </Admin>
    </>
  );
};

export default MainDash;
