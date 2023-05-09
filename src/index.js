import express from "express";
import "dotenv/config";
import db from "./database/dbConnect.js";

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
db.connect();
export default app;
