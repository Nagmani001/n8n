import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import { userRouter } from "./router/userRouter";
import { workflowRouter } from "./router/workflowRouter";
import { webhookRouter } from "./router/webhookHandler";
import { credentialsRouter } from "./router/credentialsRouter";

declare global {
  namespace Express {
    interface Request {
      userId?: string
    }
  }
}
const app = express();
export const prisma = new PrismaClient();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRouter);
app.use("/api/workflow", workflowRouter);
app.use("/api/webhook", webhookRouter);
app.use("/api/credentials", credentialsRouter);


app.listen(3000, () => {
  console.log("server is running on port 3000");
})
