import { createClient } from "redis";

async function main() {
  const redis = createClient();
  await redis.connect();

  while (true) {
    const popped = await redis.brPop("data", 0);
    // process the workflow 
    console.log(popped);
  }
}
main();
