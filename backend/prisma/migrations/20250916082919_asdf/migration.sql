/*
  Warnings:

  - Made the column `name` on table `Action` required. This step will fail if there are existing NULL values in that column.
  - Made the column `index` on table `Action` required. This step will fail if there are existing NULL values in that column.
  - Made the column `workflowId` on table `Action` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `Action` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "public"."Action" DROP CONSTRAINT "Action_workflowId_fkey";

-- AlterTable
ALTER TABLE "public"."Action" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "index" SET NOT NULL,
ALTER COLUMN "workflowId" SET NOT NULL,
ALTER COLUMN "type" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."Action" ADD CONSTRAINT "Action_workflowId_fkey" FOREIGN KEY ("workflowId") REFERENCES "public"."Workflow"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
