
import { Router, Request, Response } from "express";

export const webhookRouter: Router = Router();

webhookRouter.post("/webhook/handler/:userId/:id", (req: Request, res: Response) => {

});


