import { app } from "./src/app";
import dotenv from "dotenv";
import { connectDB } from "./db/connect.db.js";
dotenv.config()
connectDB();

const startServer = async function () {
  try {
    await connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error?.message);
  }
};

startServer();
