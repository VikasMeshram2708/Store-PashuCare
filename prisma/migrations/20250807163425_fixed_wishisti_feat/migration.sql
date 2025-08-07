/*
  Warnings:

  - Added the required column `userId` to the `Wishlist` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "public"."Wishlist_productId_idx";

-- AlterTable
ALTER TABLE "public"."Wishlist" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "Wishlist_productId_userId_idx" ON "public"."Wishlist"("productId", "userId");
