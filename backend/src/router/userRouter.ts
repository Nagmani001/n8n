import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { signinSchema, signupSchema } from "../types/zodTypes";
import { prisma } from "..";
import { JWT_TOKEN } from "../config/utils";
import { authorize } from "../middleware/authMiddleware";
export const userRouter: Router = Router();


userRouter.post("/signup", async (req: Request, res: Response) => {
  const parsedData = signupSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      msg: "invalid data",
    })
    return;
  }
  const checkUser = await prisma.user.findFirst({
    where: {
      email: parsedData.data.email,
    }
  });
  if (checkUser) {
    res.status(411).json({
      msg: "user already exists"
    })
    return;
  }


  await prisma.user.create({
    data: {
      email: parsedData.data.email,
      password: parsedData.data.password,
      name: parsedData.data.name
    }
  });
  res.json({
    msg: "user create successfully",
  });
});

userRouter.post("/signin", async (req: Request, res: Response) => {
  const parsedData = signinSchema.safeParse(req.body);
  if (!parsedData.success) {
    res.json({
      msg: "invalid data",
    })
    return;
  }
  const checkUser = await prisma.user.findFirst({
    where: {
      email: parsedData.data.email,
      password: parsedData.data.password,
    }
  });

  if (!checkUser) {
    res.status(401).json({
      msg: "invali credentials",
    });
  }

  const token = jwt.sign({ userId: checkUser?.id }, JWT_TOKEN);

  res.json({
    msg: "signup successful",
    token,
    name: checkUser?.name
  });
});

userRouter.post("/verify", authorize, async (req, res) => {
  const userId = req.userId;
  if (!userId) {
    res.status(403).json({
      msg: "invalid auth"
    });
    return;
  }
  const findUser = await prisma.user.findFirst({
    where: {
      id: userId
    }
  });
  if (!findUser) {
    console.log("i ran");
    res.status(403).json({
      msg: "invalid user"
    })
    return;
  }
  res.json({
    name: findUser.name
  })
});
