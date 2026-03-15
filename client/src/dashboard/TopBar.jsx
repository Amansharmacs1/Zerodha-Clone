import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="dash-topbar-container">
      <div className="dash-indices-container">
        <div className="dash-nifty">
          <p className="dash-index">NIFTY 50</p>
          <p className="dash-index-points">{100.2} </p>
          <p className="dash-percent"> </p>
        </div>
        <div className="dash-sensex">
          <p className="dash-index">SENSEX</p>
          <p className="dash-index-points">{100.2}</p>
          <p className="dash-percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
