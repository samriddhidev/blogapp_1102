// server.mjs
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).send("API working");
});

// Define the port number
app.listen(PORT, () => {
  console.log(`Server is working on ${PORT}`);
});
