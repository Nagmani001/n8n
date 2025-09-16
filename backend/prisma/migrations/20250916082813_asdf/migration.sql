-- DropForeignKey
ALTER TABLE "public"."Action" DROP CONSTRAINT "Action_workflowId_fkey";

-- AlterTable
ALTER TABLE "public"."Action" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "index" DROP NOT NULL,
ALTER COLUMN "workflowId" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "public"."Workflow"("id") ON DELETE SET NULL ON UPDATE CASCADE;
