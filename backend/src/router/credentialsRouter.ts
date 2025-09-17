import { Router, Request, Response } from "express";
import { authorize } from "../middleware/authMiddleware";
import { prisma } from "..";
import { credentialsSchema } from "../types/zodTypes";

export const credentialsRouter: Router = Router();

credentialsRouter.get("/getAll", authorize, async (req: Request, res: Response) => {
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

credentialsRouter.post("/add", authorize, async (req: Request, res: Response) => {
  const parsedData = credentialsSchema.safeParse(req.body);
  const userId = req.userId;

  if (!parsedData.success || !userId) {
    res.json({
      msg: "invalid data",
    });
    return;
  }

  await prisma.credentials.create({
    data: {
      key: parsedData.data.key,
      value: parsedData.data.value,
      type: parsedData.data.type,
      imageUrl: parsedData.data.imageUrl,
      userId,
    }
  });

  res.json({
    msg: "credentials added",
  });
});

