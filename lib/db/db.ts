import { MongoClient } from "mongodb";

const MONGO_URI = process.env.MONGO_URI!;

if (!MONGO_URI) {
  throw new Error("Mongo URI not provided!!!");
}

export const client = new MongoClient(MONGO_URI, {
  maxPoolSize: 10,
});

export const db = client.db("PASHUCARE_ECOMMERCE");
