"use client";

import { AddToWishlist } from "@/app/(dal)/wishlist-act";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export function WishlistBtn({ productId }: { productId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  async function handleAddToWishlist() {
    setIsLoading(true);
    try {
      const res = await AddToWishlist({ productId });
      if (res.success) {
        toast.success(res.message);
      } else {
        toast.error(res.message);
        if (res.errors) {
          // Optionally log or show detailed validation errors here
          console.error("Validation errors:", res.errors);
        }
      }
    } catch (error) {
      toast.error("Failed to add product to wishlist.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <button
      disabled={isLoading}
      onClick={handleAddToWishlist}
      className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors w-full sm:w-auto"
    >
      <Heart className="w-5 h-5" />
      {isLoading ? "Adding..." : "Add to Wishlist"}
    </button>
  );
}
