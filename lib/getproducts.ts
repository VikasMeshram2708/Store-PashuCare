import prisma from "@/utils/prisma";
import assert from "node:assert";
import { cache } from "react";

export const getProducts = cache(async (): Promise<{ data: Product[] }> => {
  try {
    const items = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return { data: items };
  } catch (error) {
    console.log(error);
    throw error;
  }
});

export const getProduct = cache(
  async ({ pid }: { pid: string }): Promise<{ data: Product }> => {
    assert(pid, "Product id is missing");
    try {
      const item = await prisma.product.findUniqueOrThrow({
        where: {
          id: pid as string,
        },
      });
      return { data: item };
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
);
