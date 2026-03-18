import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { positions } from "../data/data";


const Positions = () => {
   const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await axios.get("http://localhost:8000/allPositions");
        setAllPositions(res.data);
      } catch (error) {
        console.log("Backend not running or no data available",error);
        setAllPositions([]);
      }
    };

    fetchPositions();
  }, []);

  const labels = allPositions.map((stock) => stock.name);

  

  return (
    <>
      <h3 className="dash-title">Positions ({allPositions.length})</h3>

      <div className="dash-order-table">
        <table>
          <tr>
            <th>Product</th>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg.</th>
            <th>LTP</th>
            <th>P&L</th>
            <th>Chg.</th>
          </tr>

          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "dash-profit" : "dash-loss";
            const dayClass = stock.isLoss ? "dash-loss" : "dash-profit";

            return (
              <tr key={index}>
                <td>{stock.product}</td>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={profClass}>
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
