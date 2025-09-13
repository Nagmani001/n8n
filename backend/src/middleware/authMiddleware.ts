import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken";
import { JWT_TOKEN } from "../config/utils";
export function authorize(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];
  if (!token) {
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_TOKEN);

    //@ts-ignore
    req.userId = decoded.userId;
    next();

  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: "invalid credentials"
    });
    return;
  }

}
