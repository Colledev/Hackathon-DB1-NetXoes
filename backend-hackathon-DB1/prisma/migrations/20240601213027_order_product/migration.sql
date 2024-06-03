/*
  Warnings:

  - The primary key for the `OrderProduct` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `OrderProduct` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderProduct" DROP CONSTRAINT "OrderProduct_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "OrderProduct_pkey" PRIMARY KEY ("cartId", "productId");
