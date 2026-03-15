import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const { closeBuyWindow } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState("");
  const [stockPrice, setStockPrice] = useState("");

  const handleBuyClick = async () => {
    if (!stockQuantity || Number(stockQuantity) <= 0) {
      alert("Enter valid quantity");
      return;
    }

    if (!stockPrice || Number(stockPrice) <= 0) {
      alert("Enter valid price");
      return;
    }

    try {
      await axios.post("http://localhost:8000/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      // ✅ CLOSE POPUP AFTER SUCCESS
      closeBuyWindow();

    } catch (error) {
      console.error(error);
      alert("Order failed");
    }
  };

  return (
    <div className="dash-container" id="buy-window">
      <div className="dash-regular-order">
        <div className="dash-inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
              placeholder="Enter quantity"
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
              placeholder="Enter price"
            />
          </fieldset>
        </div>
      </div>

      <div className="dash-buttons">
        <button className="dash-btn dash-btn-blue" onClick={handleBuyClick}>
          Buy
        </button>

        <button className="dash-btn dash-btn-grey" onClick={closeBuyWindow}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;
