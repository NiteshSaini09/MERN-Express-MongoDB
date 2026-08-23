import { app } from "./src/app.js";
import dotenv from "dotenv";
import {connectDB} from "./src/db/connect.db.js"
import cookieParser from 'cookie-parser'

dotenv.config()
cookieParser()

const startServer = async function () {
  try {
    await connectDB()
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on Port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(error?.message);
  }
};

startServer();
