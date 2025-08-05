import * as z from "zod/v4";
import { db } from "../db/db";

export const ORDER_SCHEMA = z.object({
  title: z.string().min(1, "Product title is required"),
  description: z.string().min(1, "Product title is required"),
  price: z.string().min(1, "Product title is required"),
  userId: z.string().min(1, "User id is required"),
});

export const ORDER = db.collection("ORDERS");
