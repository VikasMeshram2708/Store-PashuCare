import { productSamples } from "@/data";
import prisma from "./prisma";

async function SeedDB() {
  try {
    await prisma.product.createMany({
      data: productSamples,
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
}

SeedDB()
  .then(() => console.log("Seeded db successfully..."))
  .catch(console.log);
