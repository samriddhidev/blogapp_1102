import express from "express";
import {
  getAll,
  registerController,
  loginController,
} from "../controllers/userController.js";

const router = express.Router();

// Get all users || GET
router.get("/all-Users", getAll);

// Create user || POST
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

export default router;
