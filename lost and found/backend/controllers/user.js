import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "../Utils/config.js";

export async function handleRegister(req, res) {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ msg: "details not provided" });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const oldUser = await userModel.findOne({
      $or: [{ username }, { email }],
    });
    if (oldUser) {
      return res.status(400).json({ msg: "user already exists" });
    }
    const user = await userModel.create({
      username,
      email,
      password: hashpass,
    });
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "15m",
    });
    res.cookie("token", token);
    return res
      .status(200)
      .json({ msg: "user created succesfully", user: { username, email } });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

export async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: "details not provided" });
    }
    const user = await userModel.findOne({
      email,
    });
    if (!user) {
      return res.status(400).json({ msg: "email or password invalid" });
    }
    const decode = await bcrypt.compare(password, user.password);
    if (!decode) {
      return res.status(400).json({ msg: "invalid password" });
    }
    const token = jwt.sign({ id: user._id }, config.JWT_SECRET, {
      expiresIn: "15d",
    });
    res.cookie("token", token);
    return res.status(200).json({ msg: "Login success" });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
}

export async function handleGetMe(req, res) {
  try {
    const user = await userModel.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: "user not found" });
    }
    res.json({ user });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}


