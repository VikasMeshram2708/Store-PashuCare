-- CreateTable
CREATE TABLE "public"."Wishlist" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Wishlist_productId_idx" ON "public"."Wishlist"("productId");

-- CreateIndex
CREATE INDEX "Order_userId_id_idx" ON "public"."Order"("userId", "id");

-- CreateIndex
CREATE INDEX "OrderItem_orderId_productId_idx" ON "public"."OrderItem"("orderId", "productId");

-- CreateIndex
CREATE INDEX "Product_sku_name_description_price_salePrice_tags_ownerId_idx" ON "public"."Product"("sku", "name", "description", "price", "salePrice", "tags", "ownerId");
