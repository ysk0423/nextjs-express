import { Express, Request, Response } from "express";
import { NextServer } from "next/dist/server/next";
import { ParsedUrlQuery } from "querystring";
import { cookieMiddleware } from "../middleware/cookieMiddleware";

const userRoutes = (server: Express, app: NextServer) => {
  server.get("/custom", cookieMiddleware, (req: Request, res: Response) => {
    return app.render(req, res, "/custom", req.query as ParsedUrlQuery);
  });
};

export default userRoutes;
