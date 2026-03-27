import app from "./app.js";
import express from "express";
import connectToDB from "./database.js";

connectToDB();
app.listen(8000, () => {
  console.log("Sever started on port 8000");
});
