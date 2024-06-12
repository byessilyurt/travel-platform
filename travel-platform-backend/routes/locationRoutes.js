import express from "express";
import {
  getLocations,
  addLocation,
} from "../controllers/locationController.js";
import authenticateToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getLocations);
router.post("/", authenticateToken, addLocation);

export default router;
