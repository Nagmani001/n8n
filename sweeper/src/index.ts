import { PrismaClient } from "@prisma/client";
import { createClient } from "redis";

const prisma = new PrismaClient();



async function main() {

  const redis = createClient();
  await redis.connect();

  setInterval(async () => {
    const dataToPush = await prisma.workflowRunsOutbox.findMany({
      take: 20,
    });
    await redis.rPush("data", JSON.stringify({ dataToPush }));

    Promise.all(
      dataToPush.map(async (x: any) => {
        await prisma.workflowRunsOutbox.delete({
          where: {
            id: x.id
          }
        });
      }));

  }, 5000);
}
main();
