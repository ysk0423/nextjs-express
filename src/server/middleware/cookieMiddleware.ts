import { NextFunction, Request, Response } from "express";

// 認証ミドルウェア
export const cookieMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.cookie("myCookie", "xxxxxxx", {
    httpOnly: true, // クッキーをクライアント側のJavaScriptからアクセス不可にする
    secure: process.env.NODE_ENV !== "production", // プロダクション環境ではセキュア属性を追加
    maxAge: 3600000, // クッキーの有効期限を1時間に設定（ミリ秒単位）
  });
  next();
};
