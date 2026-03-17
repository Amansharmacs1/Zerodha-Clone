import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [holdings, setHoldings] = useState([]);

  // ✅ Fetch holdings from backend
  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const response = await axios.get("https://zerodha-clone-1-nn61.onrender.com/allHoldings");
        setHoldings(response.data);
      } catch (error) {
        console.error("Error fetching holdings", error);
      }
    };

    fetchHoldings();
  }, []);

  // ✅ Dynamic chart data
  const data = {
    labels: holdings.map((stock) => stock.name),
    datasets: [
      {
        label: "Price",
        data: holdings.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="dash-watchlist-container">
      <div className="dash-search-container">
        <input
          type="text"
          placeholder="Search stocks..."
          className="dash-search"
        />
        <span className="dash-counts">
          {holdings.length} / 50
        </span>
      </div>

      <ul className="dash-list">
        {holdings.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;





// ================= ITEM =================

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  return (
    <li
      onMouseEnter={() => setShowWatchlistActions(true)}
      onMouseLeave={() => setShowWatchlistActions(false)}
    >
      <div className="dash-item">
        <p>{stock.name}</p>
        <div className="dash-itemInfo">
          <span className="dash-price">₹{stock.price}</span>
        </div>
      </div>

      {showWatchlistActions && (
        <WatchListActions uid={stock.name} />
      )}
    </li>
  );
};




// ================= ACTIONS =================

const WatchListActions = ({ uid }) => {
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  return (
    <span className="dash-actions">
      <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow}>
        <button className="dash-buy" onClick={() => openBuyWindow(uid)}>
          Buy
        </button>
      </Tooltip>

      <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}>
        <button className="dash-sell" onClick={() => openSellWindow(uid)}>
          Sell
        </button>
      </Tooltip>

      <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
        <button className="dash-action">
          <BarChartOutlined className="dash-icon" />
        </button>
      </Tooltip>

      <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
        <button className="dash-action">
          <MoreHoriz className="dash-icon" />
        </button>
      </Tooltip>
    </span>
  );
};
