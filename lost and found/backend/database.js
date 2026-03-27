import mongoose from "mongoose";
import config from "./Utils/config.js";

async function connectToDB() {
  await mongoose.connect(config.MONGO_URI);
  console.log("connected to DB");
}

export default connectToDB;