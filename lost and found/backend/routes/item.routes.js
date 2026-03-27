import { Router } from "express";
import {
  handleCreateItem,
  handleGetAllItems,
  handleUpdate,
  handleUserItems,
  handleDelete,
} from "../controllers/item.js";
import authMiddleware from "../middleware/auth.middleware.js";
const itemRouter = Router();

//To create a item
itemRouter.post("/items", authMiddleware, handleCreateItem);
//To get all items
itemRouter.get("/items", authMiddleware, handleGetAllItems);
//To get user items
itemRouter.get("/my", authMiddleware, handleUserItems);
//To update an item
itemRouter.put("/:id", authMiddleware, handleUpdate);
//To delete and Item
itemRouter.delete("/:id", authMiddleware, handleDelete);

export default itemRouter;
