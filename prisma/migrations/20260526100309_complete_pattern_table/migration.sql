/*
  Warnings:

  - You are about to drop the column `completedAt` on the `Pattern` table. All the data in the column will be lost.
  - You are about to drop the column `currentRow` on the `Pattern` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Pattern` table. All the data in the column will be lost.
  - Made the column `category` on table `Pattern` required. This step will fail if there are existing NULL values in that column.
  - Made the column `totalRows` on table `Pattern` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Pattern" DROP COLUMN "completedAt",
DROP COLUMN "currentRow",
DROP COLUMN "status",
ALTER COLUMN "category" SET NOT NULL,
ALTER COLUMN "totalRows" SET NOT NULL;
