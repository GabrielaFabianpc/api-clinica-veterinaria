import mongoose from "mongoose";
import("dotenv/config");

const db = {
  connect() {
    try {
      mongoose
        .connect(
          `mongodb+srv://clinicaveterinaria:${process.env.PASSWORD}@cluster0.1gnlrz6.mongodb.net/?retryWrites=true&w=majority`
        )
        .then(console.log("Database connected"));
    } catch (error) {
      console.log(error);
    }
  },
};

export default db;
