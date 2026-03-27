import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  handleRegister,
  handleLogin,
  handleGetMe,
} from "../controllers/user.js";

const authRouter = Router();

authRouter.post("/register", handleRegister);
authRouter.post("/login", handleLogin);
authRouter.get("/get-me", authMiddleware, handleGetMe);

export default authRouter;
