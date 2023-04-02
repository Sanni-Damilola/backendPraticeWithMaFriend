/** @format */

import express, { Application, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";

export const AppConfig = (app: Application) => {
  app
    .use(express.json())
    .use(cors())
    .use(morgan("dev"))

    .all("*", (req: Request, res: Response) => {
      res.status(404).json({
        message: `routes not found ${req.originalUrl}`,
      });
    })
    .get("/", (req: Request, res: Response) => {
      res.status(201).json({
        message: "Server is up and running",
      });
    });
};
