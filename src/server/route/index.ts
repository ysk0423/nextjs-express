import { Express } from "express";
import { NextServer } from "next/dist/server/next";
import userRoutes from "./user";

export const routes = (server: Express, app: NextServer) => {
  userRoutes(server, app);
};
