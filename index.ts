/** @format */

import express, { Application } from "express";
import { AppConfig } from "./App";
import { enviromentVariable } from "./environment/environmet";
import { dbConfig } from "./config/db";

const app: Application = express();

AppConfig(app);
dbConfig();
app.listen(enviromentVariable.port, () => {
  console.log("App is running");
});
