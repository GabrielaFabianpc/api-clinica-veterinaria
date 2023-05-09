import express from "express";
import db from "./database/dbConnect.js";
//import routes from "./routes/index.js";

db.once("open", () => {
  console.log("Database conected!");
});

const app = express();

app.use(express.json());

export default app;
