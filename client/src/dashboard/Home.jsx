import React from "react";
import "../styles/dashboard.css"
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  return (
    <div id="dashboard-app">
      <TopBar />
      <Dashboard />
    </div>
  );
};

export default Home;
