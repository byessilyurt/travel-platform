import express from "express";
import { getPosts, addPost } from "../controllers/postController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", authenticateToken, addPost);

export default router;
