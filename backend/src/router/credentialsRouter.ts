
import { Router, Request, Response } from "express";
import { authorize } from "../middleware/authMiddleware";
import { prisma } from "..";

export const credentialsRouter: Router = Router();

credentialsRouter.post("/signup", (req: Request, res: Response) => {

});


credentialsRouter.post("/signin", (req: Request, res: Response) => {

});

credentialsRouter.get("/getAll", authorize, async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    res.status(403).json({
      msg: "invalid auth",
    })
    return;
  }

  const credentials = await prisma.credentials.findMany({
    where: {
      userId,
    }
  });
  res.json({
    credentials,
  });
});
