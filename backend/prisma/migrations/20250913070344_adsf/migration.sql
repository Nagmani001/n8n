/*
  Warnings:

  - You are about to drop the column `actionId` on the `AvailableActions` table. All the data in the column will be lost.
  - You are about to drop the column `triggerId` on the `AvailableTriggers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."AvailableActions" DROP CONSTRAINT "AvailableActions_actionId_fkey";

-- DropForeignKey
ALTER TABLE "public"."AvailableTriggers" DROP CONSTRAINT "AvailableTriggers_triggerId_fkey";

-- DropIndex
DROP INDEX "public"."AvailableActions_actionId_key";

-- DropIndex
DROP INDEX "public"."AvailableTriggers_triggerId_key";

-- AlterTable
ALTER TABLE "public"."AvailableActions" DROP COLUMN "actionId";

-- AlterTable
ALTER TABLE "public"."AvailableTriggers" DROP COLUMN "triggerId";
