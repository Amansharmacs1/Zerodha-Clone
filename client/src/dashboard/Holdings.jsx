import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

// import { holdings } from "../data/data";
const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/holdings`);
        setAllHoldings(res.data);
      } catch (error) {
        console.log("Backend not running or no data available",error);
        setAllHoldings([]);
      }
    };

    fetchHoldings();
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  return (
    <>
      <h3 className="dash-title">Holdings ({allHoldings.length})</h3>

      <div className="dash-order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const investment = stock.avg * stock.qty;
              const pnl = currentValue - investment;

              const pnlClass = pnl >= 0 ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currentValue.toFixed(2)}</td>
                  <td className={pnlClass}>{pnl.toFixed(2)}</td>
                  <td className={pnlClass}>{stock.net}</td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "30px" }}>
        <VerticalGraph data={data} />
      </div>
    </>
  );
};

export default Holdings;
