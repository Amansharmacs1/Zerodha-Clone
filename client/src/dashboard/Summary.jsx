import React from "react";

const Summary = () => {
  return (
    <>
      <div className="dash-username">
        <h6>Hi, User!</h6>
        <hr className="dash-divider" />
      </div>

      <div className="dash-section">
        <span>
          <p>Equity</p>
        </span>

        <div className="dash-data">
          <div className="dash-first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="dash-second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="dash-divider" />
      </div>

      <div className="dash-section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="dash-data">
          <div className="dash-first">
            <h3 className="dash-profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="dash-second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="dash-divider" />
      </div>
    </>
  );
};

export default Summary;
