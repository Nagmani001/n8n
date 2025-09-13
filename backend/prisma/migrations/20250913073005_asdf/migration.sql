/*
  Warnings:

  - You are about to drop the column `credentialsId` on the `AvailableCredentials` table. All the data in the column will be lost.
  - Added the required column `type` to the `Action` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Trigger` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TriggerType" AS ENUM ('WEBHOOK', 'MANUAL');

-- CreateEnum
CREATE TYPE "public"."ActinoType" AS ENUM ('EMAIL', 'TELEGRAM');

-- CreateEnum
CREATE TYPE "public"."CredentialsType" AS ENUM ('EMAIL', 'TELEGRAM');

-- DropForeignKey
ALTER TABLE "public"."AvailableCredentials" DROP CONSTRAINT "AvailableCredentials_credentialsId_fkey";

-- DropIndex
DROP INDEX "public"."AvailableCredentials_credentialsId_key";

-- AlterTable
ALTER TABLE "public"."Action" ADD COLUMN     "type" "public"."ActinoType" NOT NULL;

-- AlterTable
ALTER TABLE "public"."AvailableCredentials" DROP COLUMN "credentialsId";

-- AlterTable
ALTER TABLE "public"."Credentials" ADD COLUMN     "type" "public"."CredentialsType" NOT NULL;

-- AlterTable
ALTER TABLE "public"."Trigger" ADD COLUMN     "type" "public"."TriggerType" NOT NULL;
