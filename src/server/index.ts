import express, { Request, Response } from "express";

import next from "next";
import { NextServer } from "next/dist/server/next";
import { routes } from "./route";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // ミドルウェアの設定
  server.use(express.json());

  // カスタムルート
  routes(server, app as NextServer);

  // // Expressで特定のページを表示
  // server.get("/custom", cookieMiddleware, (req: Request, res: Response) => {
  //   console.log("express route");

  //   return app.render(req, res, "/custom", req.query as ParsedUrlQuery);
  // });

  server.all("/", (req: Request, res: Response) => {
    console.log("nextjs route");
    return handle(req, res);
  });
  server.listen(port, () => {
    console.log(
      `> Server listening at http://localhost:${port} as ${
        dev ? "development" : process.env.NODE_ENV
      }`
    );
  });
});
