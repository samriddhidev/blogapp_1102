// server.mjs
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("API working");
});
const PORT = process.env.PORT || 8080;

// Define the port number
app.listen(PORT, () => {
  console.log(`Server is ${process.env.DEV_MODE} working on ${PORT}`);
});
