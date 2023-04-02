/** @format */

import mongoose from "mongoose";
import { enviromentVariable } from "../environment/environmet";

const URL = enviromentVariable.MONGODB_STRING;

export const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(URL);
    console.log(`Database connected to ${conn.connection.host}`);
  } catch (error) {
    console.log("Failed to connect to the database");
  }
};
