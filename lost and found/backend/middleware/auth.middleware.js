import jwt from "jsonwebtoken";
import config from "../Utils/config.js";

async function authMiddleware(req, res, next) {
  try {
    const token = req?.headers?.authorization?.split(" ")[1] || req.cookies.token;
    if (!token) {
      return res.status(400).json({ msg: "user not authenticated" });
    }
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.json({ msg: error.message });
  }
}

export default authMiddleware;
