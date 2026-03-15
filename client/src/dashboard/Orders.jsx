import React,{ useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await axios.get("http://localhost:8000/orders");
        console.log(res.data);   // 👈 add this
        setAllOrders(res.data);
      } catch (error) {
        console.log("Backend not running or no data available", error);
        setAllOrders([]);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      <h3 className="dash-title">Orders ({allOrders.length})</h3>

      <div className="dash-order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Total Value</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.map((order, index) => {
              const total = order.qty * order.price;

              const modeClass =
                order.mode === "BUY" ? "profit" : "loss";

              return (
                <tr key={index}>
                  <td>{order.name}</td>
                  <td>{order.qty}</td>
                  <td>{order.price.toFixed(2)}</td>
                  <td className={modeClass}>{order.mode}</td>
                  <td>{total.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
