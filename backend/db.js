import { MongoClient } from "mongodb";
import { MONGO_URI } from "./config.js";

const client = new MongoClient(MONGO_URI);

let db;

export async function connectDB() {
  if (db) return db;

  try {
    await client.connect();
    db = client.db("Portfolio");
    console.log("Database connected successfully");
    return db;
  } catch (error) {
    console.error("Error connecting database", error);
  }
}
