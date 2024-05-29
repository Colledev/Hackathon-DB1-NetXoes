/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ItemCart` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ItemCart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "ItemCart" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
