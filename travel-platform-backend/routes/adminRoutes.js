import express from "express";
import { manageUsers, managePosts } from "../controllers/adminController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/users", authenticateToken, manageUsers);
router.post("/posts", authenticateToken, managePosts);

export default router;
