import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./models/index.js";
import authRoutes from "./routes/authRoutes.js";
import locationRoutes from "./routes/locationRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/admin", adminRoutes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected");
    return sequelize.sync({ force: false }); // Ensure sync without forcing schema changes
  })
  .then(() => {
    console.log("Models synchronized");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
