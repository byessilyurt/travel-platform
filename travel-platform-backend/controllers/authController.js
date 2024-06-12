import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "../models/index.js";
import dotenv from "dotenv";

dotenv.config();
const { User } = db;

const register = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      username,
      password: hashedPassword,
      email,
    });

    const token = jwt.sign(
      { id: user.user_id, is_admin: user.is_admin },
      process.env.JWT_SECRET
    );
    res.json({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).send({ error: "Invalid username or password." });
    }

    const token = jwt.sign(
      { id: user.user_id, is_admin: user.is_admin },
      process.env.JWT_SECRET
    );
    res.json({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export { register, login };
