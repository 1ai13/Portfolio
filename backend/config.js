import dotenv from "dotenv";
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017";
export const PORT = process.env.PORT || 5000;
export const EMAIL = process.env.EMAIL;
export const GOOGLE_APP_PASSWORD = process.env.GOOGLE_APP_PASSWORD;
export const GIT_TOKEN = process.env.GIT_TOKEN;
