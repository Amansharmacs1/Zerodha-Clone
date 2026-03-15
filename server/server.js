
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { HoldingsModel } from "./model/HoldingsModel.js";
import { PositionsModel } from "./model/PositionsModel.js";
import { OrdersModel } from "./model/OrdersModel.js";
import  userRoute  from "./routes/userRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8080;
const URL = process.env.MONGO_URL;

// Middleware
app.use(cors({
  origin:"http://localhost:5173",
  credentials: true,
}));
app.use(express.json());

// Routes
app.use("/user", userRoute);

// Home route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

// Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions" });
  }
});

// Get all orders
app.get("/orders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders" });
  }
});

// Create buy order
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();

    res.status(200).json({
      message: "Order placed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error placing order",
    });
  }
});

// Sell order
app.post("/sellOrder", async (req, res) => {
  try {
    const { name, qty, price } = req.body;

    const sellQty = Number(qty);
    const sellPrice = Number(price);

    const holding = await HoldingsModel.findOne({ name });

    if (!holding) {
      return res.status(400).json({
        message: "Stock not found in holdings",
      });
    }

    if (sellQty > holding.qty) {
      return res.status(400).json({
        message: "Not enough quantity to sell",
      });
    }

    holding.qty = holding.qty - sellQty;
    holding.price = sellPrice;

    if (holding.qty === 0) {
      await HoldingsModel.deleteOne({ name });
    } else {
      await holding.save();
    }

    const newOrder = new OrdersModel({
      name,
      qty: sellQty,
      price: sellPrice,
      mode: "SELL",
    });

    await newOrder.save();

    res.status(200).json({
      message: "Stock sold successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error selling stock",
      error: error.message,
    });
  }
});

// Start server
app.listen(PORT, async () => {
  try {
    await mongoose.connect(URL);
    console.log("Database connected");
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.log("Database connection failed", error);
  }
});
