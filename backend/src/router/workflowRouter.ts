
import { Router, Request, Response } from "express";
import { authorize } from "../middleware/authMiddleware";
import { prisma } from "..";

export const workflowRouter: Router = Router();

workflowRouter.post("/workflow", (req: Request, res: Response) => {

});


workflowRouter.get("/workflow", authorize, async (req: Request, res: Response) => {
  const userId = req.userId;
  if (!userId) {
    res.status(403).json({
      msg: "invalid auth",
    });
    return;
  }
  const workflows = await prisma.workflow.findMany({
    where: {
      userId,
    }
  });

  res.json({
    workflows,
  });

});


workflowRouter.get("/workflow/:id", (req: Request, res: Response) => {

});



workflowRouter.put("/workflow/:id", (req: Request, res: Response) => {

});
