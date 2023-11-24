import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"; // import statement for userRoutes
import blogRoutes from "./routes/blogRoutes.js"; // import statement for blogRoutes

//env config
dotenv.config();

//mongodb connection
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/user/blog", blogRoutes);
const PORT = process.env.PORT || 8080;

// Define the port number
app.listen(PORT, () => {
  console.log(`Server is ${process.env.DEV_MODE} working on ${PORT}`);
});
