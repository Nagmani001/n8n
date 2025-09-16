import { Router, Request, Response } from "express";
import { prisma } from "..";

export const webhookRouter: Router = Router();

webhookRouter.post("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  if (!id) {
    res.status(403).json({
      msg: "invalid id"
    });
    return;
  }

  await prisma.$transaction(async (tx) => {
    await tx.workflowRuns.create({
      data: {
        workflowId: id
      }
    });

    await tx.workflowRunsOutbox.create({
      data: {
        workflowId: id
      }
    });
  });

  res.json({
    msg: "success"
  });
});


