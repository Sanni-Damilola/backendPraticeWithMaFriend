/** @format */

import mongoose from "mongoose";
import { enviromentVariable } from "../environment/environmet";

const URL = enviromentVariable.LIVE;
// const URL = enviromentVariable.MONGODB_STRING;

export const dbConfig = async () => {
  try {
    const conn = await mongoose.connect(URL);
    if (mongoose.connection.host === "localhost") {
      console.log("You're Connected to LocalHost");
    } else {
      console.log("You're Connected To Cloud Host");
    }
  } catch (error) {
    console.log("Failed to connect to the database", error);
  }
};
