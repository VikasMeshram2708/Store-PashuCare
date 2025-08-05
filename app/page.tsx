"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { productsData } from "@/data";
import { Heart, Loader2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";
import { AddToFav, GetFvtItems } from "./(dal)/orders";
import { useDebounce } from "@/lib/hooks/use-debounce";

type ProductType = {
  productId: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export default function Home() {
  const [fvLoading, setFvLoading] = useState<string | null>(null);
  const [flist, setFList] = useState<ProductType[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(
    null,
  );
  const debouncedProductId = useDebounce(selectedProductId, 500);

  useEffect(() => {
    async function fetchFavourites() {
      try {
        const response = await GetFvtItems();
        if (response.success && response.data) {
          setFList(response.data);
        }
      } catch (error) {
        toast.error("Failed to load favourites.");
      }
    }

    fetchFavourites();
  }, []);

  useEffect(() => {
    if (!debouncedProductId) return;

    async function handleDebouncedFavourite() {
      try {
        setFvLoading(debouncedProductId);
        const response = await AddToFav({ productId: debouncedProductId });

        if (!response.success) {
          toast.error(response.message ?? "Error updating favourite");
        } else {
          toast.success(response.message ?? "Favourite updated");

          // Refresh favourite list
          const updated = await GetFvtItems();
          if (updated.success && updated.data) {
            setFList(updated.data);
          }
        }
      } catch (error) {
        toast.error("Error updating favourite");
      } finally {
        setFvLoading(null);
        setSelectedProductId(null);
      }
    }

    handleDebouncedFavourite();
  }, [debouncedProductId]);

  function isFvtItem(productId: string) {
    return flist.some((item) => item.productId === productId);
  }

  return (
    <div className="bg-background px-4 py-10">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-semibold mb-8">Latest Drops</h1>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productsData.map((prd, idx) => {
            const productId = String(prd.id);
            const isFvt = isFvtItem(productId);
            const isLoading = fvLoading === productId;

            return (
              <Card
                key={idx}
                className="hover:shadow-md transition-shadow duration-200"
              >
                <CardHeader>
                  <CardAction>
                    {isLoading ? (
                      <Loader2
                        className="animate-spin text-red-500"
                        size={20}
                      />
                    ) : (
                      <Heart
                        onClick={() => setSelectedProductId(productId)}
                        fill={isFvt ? "red" : "none"}
                        color="red"
                        size={20}
                        className="cursor-pointer"
                      />
                    )}
                  </CardAction>
                </CardHeader>

                <CardContent className="p-4 space-y-4">
                  <Image
                    src={prd.imageUrl}
                    alt={prd.title}
                    width={500}
                    height={500}
                    className="w-auto h-auto object-cover object-center"
                  />
                  <CardTitle className="line-clamp-2">{prd.title}</CardTitle>
                </CardContent>

                <CardFooter className="px-4 pb-4 flex items-center justify-between">
                  <span className="text-base font-semibold">
                    ₹{prd.price.toFixed(2)}
                  </span>
                  <Button size="sm" className="text-sm font-medium">
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
