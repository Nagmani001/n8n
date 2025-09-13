/*
  Warnings:

  - Added the required column `createdAt` to the `Credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activeStatus` to the `Workflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `Workflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Workflow` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Workflow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Credentials" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "public"."Workflow" ADD COLUMN     "activeStatus" BOOLEAN NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "public"."AvailableCredentials" (
    "id" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "credentialsId" TEXT NOT NULL,

    CONSTRAINT "AvailableCredentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AvailableCredentials_credentialsId_key" ON "public"."AvailableCredentials"("credentialsId");

-- AddForeignKey
ALTER TABLE "public"."AvailableCredentials" ADD CONSTRAINT "AvailableCredentials_credentialsId_fkey" FOREIGN KEY ("credentialsId") REFERENCES "public"."Credentials"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
