import * as z from "zod/v4";
import { db } from "../db/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import assert from "node:assert";

export const FAVOURITE_PRODUCT = z.object({
  productId: z.string().min(1, "Product ID is required"),
  userId: z.string().min(1, "User Id is required"),
});

export const FAVOURITE = db.collection("FAVOURTIES");
