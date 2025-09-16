import { Router, Request, Response } from "express";
import { authorize } from "../middleware/authMiddleware";
import { prisma } from "..";
import { updateWrokflowSchema } from "../types/zodTypes";

export const workflowRouter: Router = Router();

workflowRouter.post("/workflow", authorize, async (req: Request, res: Response) => {
  const userId = req.userId;
  if (!userId) {
    res.status(403).json({
      msg: "invalid auth"
    })
    return;
  }

  const createWorkflows = await prisma.workflow.create({
    data: {
      title: "My workflow",
      activeStatus: false,
      userId,
    }
  });

  res.json({
    msg: "workflow created successfully",
    workflowsId: createWorkflows.id,
  });
});

workflowRouter.get("/workflows", authorize, async (req: Request, res: Response) => {
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

workflowRouter.get("/workflow/:id", authorize, async (req: Request, res: Response) => {
  const id = req.params.id;
  const userId = req.userId;
  if (!userId || !id) {
    res.status(403).json({
      msg: "invalid auth"
    });
    return;
  }
  try {
    const workflow = await prisma.workflow.findFirst({
      where: {
        id,
      },
      include: {
        trigger: true,
        actions: true,
      }
    });
    res.json({
      workflow,
    });
  } catch (err) {
    console.log(err);
    res.status(403).json({
      msg: "error while fetching workflow",
    });
  }
});

workflowRouter.put("/workflow/:id", authorize, async (req: Request, res: Response) => {
  const workflowId = req.params.id;
  const userId = req.userId;
  const parsedData = updateWrokflowSchema.safeParse(req.body);


  if (!userId || !parsedData.success || !workflowId) {
    res.status(403).json({
      msg: "invalid auth / data",
    });
    return;
  }

  console.log(parsedData.data)
  if (!parsedData.data.trigger) {

    try {
      await prisma.workflow.update({
        data: {
          title: parsedData.data.title,
          updatedAt: parsedData.data.updatedAt,
          activeStatus: parsedData.data.activeStatus,

          actions: {
            //@ts-ignore
            create: parsedData.data.actions
          }
        },
        where: {
          id: workflowId
        }
      });

      res.json({
        msg: "updated",
      });

    } catch (err) {
      console.log(err);
      res.status(401).json({
        msg: "something went wrong",
      });

    }
  } else {

    try {
      await prisma.workflow.update({
        data: {
          title: parsedData.data.title,
          updatedAt: parsedData.data.updatedAt,
          activeStatus: parsedData.data.activeStatus,

          trigger: {
            create: {
              name: parsedData.data.trigger.name,
              type: parsedData.data.trigger.type
            },
          },
          actions: {
            //@ts-ignore
            create: parsedData.data.actions
          }
        },
        where: {
          id: workflowId
        }
      });

      res.json({
        msg: "updated",
      });

    } catch (err) {
      console.log(err);
      res.status(401).json({
        msg: "something went wrong",
      });

    }

  }
});


workflowRouter.get("/getTriggers", async (req: Request, res: Response) => {
  const triggers = await prisma.availableTriggers.findMany({});
  if (!triggers) {
    res.json({
      msg: "no triggers available",
    });
    return;
  }
  res.json({
    triggers,
  });
});


workflowRouter.get("/getActions", async (req: Request, res: Response) => {
  const actions = await prisma.availableActions.findMany({});
  if (!actions) {
    res.json({
      msg: "no triggers available",
    });
    return;
  }
  res.json({
    actions,
  });
});
