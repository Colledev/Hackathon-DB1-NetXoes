/*
  Warnings:

  - You are about to drop the `ShoppingCart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ItemCartToShoppingCart` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShoppingCart" DROP CONSTRAINT "ShoppingCart_userId_fkey";

-- DropForeignKey
ALTER TABLE "_ItemCartToShoppingCart" DROP CONSTRAINT "_ItemCartToShoppingCart_A_fkey";

-- DropForeignKey
ALTER TABLE "_ItemCartToShoppingCart" DROP CONSTRAINT "_ItemCartToShoppingCart_B_fkey";

-- DropTable
DROP TABLE "ShoppingCart";

-- DropTable
DROP TABLE "_ItemCartToShoppingCart";

-- CreateTable
CREATE TABLE "Cart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CartToItemCart" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CartToItemCart_AB_unique" ON "_CartToItemCart"("A", "B");

-- CreateIndex
CREATE INDEX "_CartToItemCart_B_index" ON "_CartToItemCart"("B");

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToItemCart" ADD CONSTRAINT "_CartToItemCart_A_fkey" FOREIGN KEY ("A") REFERENCES "Cart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CartToItemCart" ADD CONSTRAINT "_CartToItemCart_B_fkey" FOREIGN KEY ("B") REFERENCES "ItemCart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
