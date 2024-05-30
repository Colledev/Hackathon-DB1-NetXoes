-- CreateTable
CREATE TABLE "ItemCart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ItemCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ShoppingCart" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ShoppingCart_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemCartToShoppingCart" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ItemCart_userId_productId_key" ON "ItemCart"("userId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "_ItemCartToShoppingCart_AB_unique" ON "_ItemCartToShoppingCart"("A", "B");

-- CreateIndex
CREATE INDEX "_ItemCartToShoppingCart_B_index" ON "_ItemCartToShoppingCart"("B");

-- AddForeignKey
ALTER TABLE "ItemCart" ADD CONSTRAINT "ItemCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemCart" ADD CONSTRAINT "ItemCart_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShoppingCart" ADD CONSTRAINT "ShoppingCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemCartToShoppingCart" ADD CONSTRAINT "_ItemCartToShoppingCart_A_fkey" FOREIGN KEY ("A") REFERENCES "ItemCart"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemCartToShoppingCart" ADD CONSTRAINT "_ItemCartToShoppingCart_B_fkey" FOREIGN KEY ("B") REFERENCES "ShoppingCart"("id") ON DELETE CASCADE ON UPDATE CASCADE;
