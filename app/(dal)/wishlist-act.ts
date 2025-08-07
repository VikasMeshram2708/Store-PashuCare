"use server";

import prisma from "@/utils/prisma";
import { isAuthenticatedUser } from "@/lib/cached-user";
import * as z from "zod/v4";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const wishlistSchema = z.object({
  productId: z.string().min(1, "Product ID is required"),
  userId: z.string().min(1, "User ID is required"),
});

export async function AddToWishlist({ productId }: { productId: string }) {
  // Auth check
  const authUser = await isAuthenticatedUser();
  if (!authUser) {
    return {
      success: false,
      message: "Login required",
    };
  }

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Validate input
  const parsed = wishlistSchema.safeParse({
    productId,
    userId: user?.id || "",
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid data",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { productId: pid, userId: uid } = parsed.data;

  try {
    // Check product existence
    const product = await prisma.product.findUnique({
      where: { id: pid },
    });

    if (!product) {
      return {
        success: false,
        message: "Product not found",
      };
    }

    // Check if already wishlisted
    const existing = await prisma.wishlist.findFirst({
      where: { productId: pid, userId: uid },
    });

    if (existing) {
      return {
        success: false,
        message: "Product already in wishlist",
      };
    }

    // Add to wishlist
    const created = await prisma.wishlist.create({
      data: { productId: pid, userId: uid },
    });

    return {
      success: true,
      message: "Added to wishlist",
      data: created,
    };
  } catch (err) {
    console.error("Wishlist error:", err);
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
