/*
  Warnings:

  - You are about to drop the column `cartId` on the `Order` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_cartId_fkey";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "cartId";

-- CreateTable
CREATE TABLE "_ItemCartToOrder" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ItemCartToOrder_AB_unique" ON "_ItemCartToOrder"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemCartToOrder_B_index" ON "_ItemCartToOrder"("B");

-- AddForeignKey
ALTER TABLE "_ItemCartToOrder" ADD CONSTRAINT "_ItemCartToOrder_A_fkey" FOREIGN KEY ("A") REFERENCES "ItemCart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemCartToOrder" ADD CONSTRAINT "_ItemCartToOrder_B_fkey" FOREIGN KEY ("B") REFERENCES "Order"("id") ON DELETE CASCADE ON UPDATE CASCADE;
