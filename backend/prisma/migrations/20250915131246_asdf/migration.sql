-- DropForeignKey
ALTER TABLE "public"."Trigger" DROP CONSTRAINT "Trigger_workflowId_fkey";

-- AlterTable
ALTER TABLE "public"."Trigger" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "workflowId" DROP NOT NULL,
ALTER COLUMN "type" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Trigger" ADD CONSTRAINT "Trigger_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "public"."Workflow"("id") ON DELETE SET NULL ON UPDATE CASCADE;
