import express from "express";
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import itemRouter from "./routes/item.routes.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/", itemRouter);
app.use("/api/auth", authRouter);

export default app;
