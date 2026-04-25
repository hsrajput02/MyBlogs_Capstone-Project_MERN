import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import { resetPassword } from "../controllers/authController.js";
import { deleteAccount } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.delete("/delete-account", authMiddleware, deleteAccount);

export default router;